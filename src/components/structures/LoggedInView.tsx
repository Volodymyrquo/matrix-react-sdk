/*
Copyright 2015, 2016 OpenMarket Ltd
Copyright 2017 Vector Creations Ltd
Copyright 2017, 2018, 2020 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { MatrixClient } from 'matrix-js-sdk/src/client';

import { Key } from '../../Keyboard';
import PageTypes from '../../PageTypes';
import MediaDeviceHandler from '../../MediaDeviceHandler';
import { fixupColorFonts } from '../../utils/FontManager';
import dis from '../../dispatcher/dispatcher';
import { IMatrixClientCreds } from '../../MatrixClientPeg';
import SettingsStore from "../../settings/SettingsStore";

import ResizeHandle from '../views/elements/ResizeHandle';
import { Resizer, CollapseDistributor } from '../../resizer';
import MatrixClientContext from "../../contexts/MatrixClientContext";
import * as KeyboardShortcuts from "../../accessibility/KeyboardShortcuts";
import HomePage from "./HomePage";
import ResizeNotifier from "../../utils/ResizeNotifier";
import PlatformPeg from "../../PlatformPeg";
import { DefaultTagID } from "../../stores/room-list/models";
import {
    showToast as showServerLimitToast,
    hideToast as hideServerLimitToast,
} from "../../toasts/ServerLimitToast";
import { Action } from "../../dispatcher/actions";
import LeftPanel from "./LeftPanel";
import CallContainer from '../views/voip/CallContainer';
import { ViewRoomDeltaPayload } from "../../dispatcher/payloads/ViewRoomDeltaPayload";
import RoomListStore from "../../stores/room-list/RoomListStore";
import NonUrgentToastContainer from "./NonUrgentToastContainer";
import { ToggleRightPanelPayload } from "../../dispatcher/payloads/ToggleRightPanelPayload";
import { IOOBData, IThreepidInvite } from "../../stores/ThreepidInviteStore";
import Modal from "../../Modal";
import { ICollapseConfig } from "../../resizer/distributors/collapse";
import HostSignupContainer from '../views/host_signup/HostSignupContainer';
import { getKeyBindingsManager, NavigationAction, RoomAction } from '../../KeyBindingsManager';
import { IOpts } from "../../createRoom";
import SpacePanel from "../views/spaces/SpacePanel";
import { replaceableComponent } from "../../utils/replaceableComponent";
import CallHandler, { CallHandlerEvent } from '../../CallHandler';
import { MatrixCall } from 'matrix-js-sdk/src/webrtc/call';
import AudioFeedArrayForCall from '../views/voip/AudioFeedArrayForCall';
import RoomView from './RoomView';
import ToastContainer from './ToastContainer';
import MyGroups from "./MyGroups";
import UserView from "./UserView";
import GroupView from "./GroupView";
import SpaceStore from "../../stores/SpaceStore";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SumraHeader from "./sumra/SumraHeaderWrapper.jsx";
import SumraLeftPanel from "./sumra/SumraLeftPanel.jsx";
import { Provider, Context } from "../../contexts/Routes/context";

const SumraLeaderboard = React.lazy(()=> import("../views/sumra/SumraLeaderboard"));
const SumraGlobalEarnings = React.lazy(()=> import('../views/sumra/SumraGlobalEarnings'));
const SumraStatistics = React.lazy(()=> import('../views/sumra/SumraStatistics'));
const SumraPioneerMembership = React.lazy(()=> import('../views/sumra/SumraPioneerMembership'));
const SumraContactBook = React.lazy(()=> import('../views/sumra/SumraContactBook'));
const SumraDivitsBonusPlaza = React.lazy(()=> import('../views/sumra/SumraDivitsBonusPlaza'));
const SumraRewards = React.lazy(()=> import('../views/sumra/SumraRewards'));
const SumraReferrals = React.lazy(()=> import("../views/sumra/SumraReferralsWrapper.jsx"));

// We need to fetch each pinned message individually (if we don't already have it)
// so each pinned message may trigger a request. Limit the number per room for sanity.
// NB. this is just for server notices rather than pinned messages in general.
const MAX_PINNED_NOTICES_PER_ROOM = 2;

function canElementReceiveInput(el) {
    return el.tagName === "INPUT" ||
        el.tagName === "TEXTAREA" ||
        el.tagName === "SELECT" ||
        !!el.getAttribute("contenteditable");
}

interface IProps {
    matrixClient: MatrixClient;
    onRegistered: (credentials: IMatrixClientCreds) => Promise<MatrixClient>;
    hideToSRUsers: boolean;
    resizeNotifier: ResizeNotifier;
    // eslint-disable-next-line camelcase
    page_type?: string;
    autoJoin?: boolean;
    threepidInvite?: IThreepidInvite;
    roomOobData?: IOOBData;
    currentRoomId: string;
    collapseLhs: boolean;
    config: {
        piwik: {
            policyUrl: string;
        };
        [key: string]: any;
    };
    currentUserId?: string;
    currentGroupId?: string;
    currentGroupIsNew?: boolean;
    justRegistered?: boolean;
    roomJustCreatedOpts?: IOpts;
}

interface IUsageLimit {
    // "hs_disabled" is NOT a specced string, but is used in Synapse
    // This is tracked over at https://github.com/matrix-org/synapse/issues/9237
    // eslint-disable-next-line camelcase
    limit_type: "monthly_active_user" | "hs_disabled" | string;
    // eslint-disable-next-line camelcase
    admin_contact?: string;
}

interface IState {
    syncErrorData?: {
        error: {
            // This is not specced, but used in Synapse. See
            // https://github.com/matrix-org/synapse/issues/9237#issuecomment-768238922
            data: IUsageLimit;
            errcode: string;
        };
    };
    usageLimitDismissed: boolean;
    usageLimitEventContent?: IUsageLimit;
    usageLimitEventTs?: number;
    useCompactLayout: boolean;
    activeCalls: Array<MatrixCall>;
}

/**
 * This is what our MatrixChat shows when we are logged in. The precise view is
 * determined by the page_type property.
 *
 * Currently it's very tightly coupled with MatrixChat. We should try to do
 * something about that.
 *
 * Components mounted below us can access the matrix client via the react context.
 */
@replaceableComponent("structures.LoggedInView")
class LoggedInView extends React.Component<IProps, IState> {
    static displayName = 'LoggedInView';
    static contextType = Context;

    static propTypes = {
        matrixClient: PropTypes.instanceOf(MatrixClient).isRequired,
        page_type: PropTypes.string.isRequired,
        onRoomCreated: PropTypes.func,

        // Called with the credentials of a registered user (if they were a ROU that
        // transitioned to PWLU)
        onRegistered: PropTypes.func,

        // and lots and lots of other stuff.
    };

    protected readonly _matrixClient: MatrixClient;
    protected readonly _roomView: React.RefObject<any>;
    protected readonly _resizeContainer: React.RefObject<ResizeHandle>;
    protected compactLayoutWatcherRef: string;
    protected resizer: Resizer;

    constructor(props, context) {
        super(props, context);

        this.state = {
            syncErrorData: undefined,
            // use compact timeline view
            useCompactLayout: SettingsStore.getValue('useCompactLayout'),
            usageLimitDismissed: false,
            activeCalls: [],
        };

        // stash the MatrixClient in case we log out before we are unmounted
        this._matrixClient = this.props.matrixClient;

        MediaDeviceHandler.loadDevices();

        fixupColorFonts();

        this._roomView = React.createRef();
        this._resizeContainer = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('keydown', this._onNativeKeyDown, false);
        CallHandler.sharedInstance().addListener(CallHandlerEvent.CallsChanged, this.onCallsChanged);

        this._updateServerNoticeEvents();

        this._matrixClient.on("accountData", this.onAccountData);
        this._matrixClient.on("sync", this.onSync);
        // Call `onSync` with the current state as well
        this.onSync(
            this._matrixClient.getSyncState(),
            null,
            this._matrixClient.getSyncStateData(),
        );
        this._matrixClient.on("RoomState.events", this.onRoomStateEvents);

        this.compactLayoutWatcherRef = SettingsStore.watchSetting(
            "useCompactLayout", null, this.onCompactLayoutChanged,
        );

        /*   this.resizer = this._createResizer();
        this.resizer.attach();
        this._loadResizerPreferences(); */
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this._onNativeKeyDown, false);
        CallHandler.sharedInstance().removeListener(CallHandlerEvent.CallsChanged, this.onCallsChanged);
        this._matrixClient.removeListener("accountData", this.onAccountData);
        this._matrixClient.removeListener("sync", this.onSync);
        this._matrixClient.removeListener("RoomState.events", this.onRoomStateEvents);
        SettingsStore.unwatchSetting(this.compactLayoutWatcherRef);
        /* this.resizer.detach(); */
    }

    private onCallsChanged = () => {
        this.setState({
            activeCalls: CallHandler.sharedInstance().getAllActiveCalls(),
        });
    };

    canResetTimelineInRoom = (roomId) => {
        if (!this._roomView.current) {
            return true;
        }
        return this._roomView.current.canResetTimeline();
    };

    _createResizer() {
        let size;
        let collapsed;
        const collapseConfig: ICollapseConfig = {
            // TODO decrease this once Spaces launches as it'll no longer need to include the 56px Community Panel
            toggleSize: 206 - 50,
            onCollapsed: (_collapsed) => {
                collapsed = _collapsed;
                if (_collapsed) {
                    dis.dispatch({ action: "hide_left_panel" });
                    window.localStorage.setItem("mx_lhs_size", '0');
                } else {
                    dis.dispatch({ action: "show_left_panel" });
                }
            },
            onResized: (_size) => {
                size = _size;
                this.props.resizeNotifier.notifyLeftHandleResized();
            },
            onResizeStart: () => {
                this.props.resizeNotifier.startResizing();
            },
            onResizeStop: () => {
                if (!collapsed) window.localStorage.setItem("mx_lhs_size", '' + size);
                this.props.resizeNotifier.stopResizing();
            },
            isItemCollapsed: domNode => {
                return domNode.classList.contains("mx_LeftPanel_minimized");
            },
        };
        const resizer = new Resizer(this._resizeContainer.current, CollapseDistributor, collapseConfig);
        resizer.setClassNames({
            handle: "mx_ResizeHandle",
            vertical: "mx_ResizeHandle_vertical",
            reverse: "mx_ResizeHandle_reverse",
        });
        return resizer;
    }

    _loadResizerPreferences() {
        let lhsSize = parseInt(window.localStorage.getItem("mx_lhs_size"), 10);
        if (isNaN(lhsSize)) {
            lhsSize = 350;
        }
        this.resizer.forHandleAt(0).resize(lhsSize);
    }

    onAccountData = (event) => {
        if (event.getType() === "m.ignored_user_list") {
            dis.dispatch({ action: "ignore_state_changed" });
        }
    };

    onCompactLayoutChanged = (setting, roomId, level, valueAtLevel, newValue) => {
        this.setState({
            useCompactLayout: valueAtLevel,
        });
    };

    onSync = (syncState, oldSyncState, data) => {
        const oldErrCode = (
            this.state.syncErrorData &&
            this.state.syncErrorData.error &&
            this.state.syncErrorData.error.errcode
        );
        const newErrCode = data && data.error && data.error.errcode;
        if (syncState === oldSyncState && oldErrCode === newErrCode) return;

        if (syncState === 'ERROR') {
            this.setState({
                syncErrorData: data,
            });
        } else {
            this.setState({
                syncErrorData: null,
            });
        }

        if (oldSyncState === 'PREPARED' && syncState === 'SYNCING') {
            this._updateServerNoticeEvents();
        } else {
            this._calculateServerLimitToast(this.state.syncErrorData, this.state.usageLimitEventContent);
        }
    };

    onRoomStateEvents = (ev, state) => {
        const serverNoticeList = RoomListStore.instance.orderedLists[DefaultTagID.ServerNotice];
        if (serverNoticeList && serverNoticeList.some(r => r.roomId === ev.getRoomId())) {
            this._updateServerNoticeEvents();
        }
    };

    private onUsageLimitDismissed = () => {
        this.setState({
            usageLimitDismissed: true,
        });
    };

    _calculateServerLimitToast(syncError: IState["syncErrorData"], usageLimitEventContent?: IUsageLimit) {
        const error = syncError && syncError.error && syncError.error.errcode === "M_RESOURCE_LIMIT_EXCEEDED";
        if (error) {
            usageLimitEventContent = syncError.error.data;
        }

        // usageLimitDismissed is true when the user has explicitly hidden the toast
        // and it will be reset to false if a *new* usage alert comes in.
        if (usageLimitEventContent && this.state.usageLimitDismissed) {
            showServerLimitToast(
                usageLimitEventContent.limit_type,
                this.onUsageLimitDismissed,
                usageLimitEventContent.admin_contact,
                error,
            );
        } else {
            hideServerLimitToast();
        }
    }

    _updateServerNoticeEvents = async () => {
        const serverNoticeList = RoomListStore.instance.orderedLists[DefaultTagID.ServerNotice];
        if (!serverNoticeList) return [];

        const events = [];
        let pinnedEventTs = 0;
        for (const room of serverNoticeList) {
            const pinStateEvent = room.currentState.getStateEvents("m.room.pinned_events", "");

            if (!pinStateEvent || !pinStateEvent.getContent().pinned) continue;
            pinnedEventTs = pinStateEvent.getTs();

            const pinnedEventIds = pinStateEvent.getContent().pinned.slice(0, MAX_PINNED_NOTICES_PER_ROOM);
            for (const eventId of pinnedEventIds) {
                const timeline = await this._matrixClient.getEventTimeline(room.getUnfilteredTimelineSet(), eventId);
                const event = timeline.getEvents().find(ev => ev.getId() === eventId);
                if (event) events.push(event);
            }
        }

        if (pinnedEventTs && this.state.usageLimitEventTs > pinnedEventTs) {
            // We've processed a newer event than this one, so ignore it.
            return;
        }

        const usageLimitEvent = events.find((e) => {
            return (
                e && e.getType() === 'm.room.message' &&
                e.getContent()['server_notice_type'] === 'm.server_notice.usage_limit_reached'
            );
        });
        const usageLimitEventContent = usageLimitEvent && usageLimitEvent.getContent();
        this._calculateServerLimitToast(this.state.syncErrorData, usageLimitEventContent);
        this.setState({
            usageLimitEventContent,
            usageLimitEventTs: pinnedEventTs,
            // This is a fresh toast, we can show toasts again
            usageLimitDismissed: false,
        });
    };

    _onPaste = (ev) => {
        let canReceiveInput = false;
        let element = ev.target;
        // test for all parents because the target can be a child of a contenteditable element
        while (!canReceiveInput && element) {
            canReceiveInput = canElementReceiveInput(element);
            element = element.parentElement;
        }
        if (!canReceiveInput) {
            // refocusing during a paste event will make the
            // paste end up in the newly focused element,
            // so dispatch synchronously before paste happens
            dis.fire(Action.FocusSendMessageComposer, true);
        }
    };

    /*
    SOME HACKERY BELOW:
    React optimizes event handlers, by always attaching only 1 handler to the document for a given type.
    It then internally determines the order in which React event handlers should be called,
    emulating the capture and bubbling phases the DOM also has.

    But, as the native handler for React is always attached on the document,
    it will always run last for bubbling (first for capturing) handlers,
    and thus React basically has its own event phases, and will always run
    after (before for capturing) any native other event handlers (as they tend to be attached last).

    So ideally one wouldn't mix React and native event handlers to have bubbling working as expected,
    but we do need a native event handler here on the document,
    to get keydown events when there is no focused element (target=body).

    We also do need bubbling here to give child components a chance to call `stopPropagation()`,
    for keydown events it can handle itself, and shouldn't be redirected to the composer.

    So we listen with React on this component to get any events on focused elements, and get bubbling working as expected.
    We also listen with a native listener on the document to get keydown events when no element is focused.
    Bubbling is irrelevant here as the target is the body element.
    */
    _onReactKeyDown = (ev) => {
        // events caught while bubbling up on the root element
        // of this component, so something must be focused.
        this._onKeyDown(ev);
    };

    _onNativeKeyDown = (ev) => {
        // only pass this if there is no focused element.
        // if there is, _onKeyDown will be called by the
        // react keydown handler that respects the react bubbling order.
        if (ev.target === document.body) {
            this._onKeyDown(ev);
        }
    };

    _onKeyDown = (ev) => {
        let handled = false;

        const roomAction = getKeyBindingsManager().getRoomAction(ev);
        switch (roomAction) {
            case RoomAction.ScrollUp:
            case RoomAction.RoomScrollDown:
            case RoomAction.JumpToFirstMessage:
            case RoomAction.JumpToLatestMessage:
                // pass the event down to the scroll panel
                this._onScrollKeyPressed(ev);
                handled = true;
                break;
            case RoomAction.FocusSearch:
                dis.dispatch({
                    action: 'focus_search',
                });
                handled = true;
                break;
        }
        if (handled) {
            ev.stopPropagation();
            ev.preventDefault();
            return;
        }

        const navAction = getKeyBindingsManager().getNavigationAction(ev);
        switch (navAction) {
            case NavigationAction.FocusRoomSearch:
                dis.dispatch({
                    action: 'focus_room_filter',
                });
                handled = true;
                break;
            case NavigationAction.ToggleUserMenu:
                dis.fire(Action.ToggleUserMenu);
                handled = true;
                break;
            case NavigationAction.ToggleShortCutDialog:
                KeyboardShortcuts.toggleDialog();
                handled = true;
                break;
            case NavigationAction.GoToHome:
                dis.dispatch({
                    action: 'view_home_page',
                });
                Modal.closeCurrentModal("homeKeyboardShortcut");
                handled = true;
                break;
            case NavigationAction.ToggleRoomSidePanel:
                if (this.props.page_type === "room_view" || this.props.page_type === "group_view") {
                    dis.dispatch<ToggleRightPanelPayload>({
                        action: Action.ToggleRightPanel,
                        type: this.props.page_type === "room_view" ? "room" : "group",
                    });
                    handled = true;
                }
                break;
            case NavigationAction.SelectPrevRoom:
                dis.dispatch<ViewRoomDeltaPayload>({
                    action: Action.ViewRoomDelta,
                    delta: -1,
                    unread: false,
                });
                handled = true;
                break;
            case NavigationAction.SelectNextRoom:
                dis.dispatch<ViewRoomDeltaPayload>({
                    action: Action.ViewRoomDelta,
                    delta: 1,
                    unread: false,
                });
                handled = true;
                break;
            case NavigationAction.SelectPrevUnreadRoom:
                dis.dispatch<ViewRoomDeltaPayload>({
                    action: Action.ViewRoomDelta,
                    delta: -1,
                    unread: true,
                });
                break;
            case NavigationAction.SelectNextUnreadRoom:
                dis.dispatch<ViewRoomDeltaPayload>({
                    action: Action.ViewRoomDelta,
                    delta: 1,
                    unread: true,
                });
                break;
            default:
                // if we do not have a handler for it, pass it to the platform which might
                handled = PlatformPeg.get().onKeyDown(ev);
        }
        if (handled) {
            ev.stopPropagation();
            ev.preventDefault();
            return;
        }

        const isModifier = ev.key === Key.ALT || ev.key === Key.CONTROL || ev.key === Key.META || ev.key === Key.SHIFT;
        if (!isModifier && !ev.altKey && !ev.ctrlKey && !ev.metaKey) {
            // The above condition is crafted to _allow_ characters with Shift
            // already pressed (but not the Shift key down itself).

            const isClickShortcut = ev.target !== document.body &&
                (ev.key === Key.SPACE || ev.key === Key.ENTER);

            // Do not capture the context menu key to improve keyboard accessibility
            if (ev.key === Key.CONTEXT_MENU) {
                return;
            }

            if (!isClickShortcut && ev.key !== Key.TAB && !canElementReceiveInput(ev.target)) {
                // synchronous dispatch so we focus before key generates input
                dis.fire(Action.FocusSendMessageComposer, true);
                ev.stopPropagation();
                // we should *not* preventDefault() here as
                // that would prevent typing in the now-focussed composer
            }
        }
    };

    /**
     * dispatch a page-up/page-down/etc to the appropriate component
     * @param {Object} ev The key event
     */
    _onScrollKeyPressed = (ev) => {
        if (this._roomView.current) {
            this._roomView.current.handleScrollKey(ev);
        }
    };

    render() {
        let pageElement;

        switch (this.props.page_type) {
            case PageTypes.RoomView:
                pageElement = <RoomView
                    ref={this._roomView}
                    onRegistered={this.props.onRegistered}
                    threepidInvite={this.props.threepidInvite}
                    oobData={this.props.roomOobData}
                    key={this.props.currentRoomId || 'roomview'}
                    resizeNotifier={this.props.resizeNotifier}
                    justCreatedOpts={this.props.roomJustCreatedOpts}
                />;
                break;

            case PageTypes.MyGroups:
                pageElement = <MyGroups />;
                break;

            case PageTypes.RoomDirectory:
            // handled by MatrixChat for now
                break;

            case PageTypes.HomePage:
                pageElement = <HomePage justRegistered={this.props.justRegistered} />;
                break;

            case PageTypes.UserView:
                pageElement = <UserView userId={this.props.currentUserId} resizeNotifier={this.props.resizeNotifier} />;
                break;
            case PageTypes.GroupView:
                pageElement = <GroupView
                    groupId={this.props.currentGroupId}
                    isNew={this.props.currentGroupIsNew}
                    resizeNotifier={this.props.resizeNotifier}
                />;
                break;
        }

        let bodyClasses = 'mx_MatrixChat';
        if (this.state.useCompactLayout) {
            bodyClasses += ' mx_MatrixChat_useCompactLayout';
        }

        const audioFeedArraysForCalls = this.state.activeCalls.map((call) => {
            return (
                <AudioFeedArrayForCall call={call} key={call.callId} />
            );
        });
        const pageTitle = this.context.pageTitle;
        return (
            <Router>
                <Provider>
                    {pageTitle === 'Contact Book'?
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Route path="/contact-book/all-contacts" component={SumraContactBook} />

                        </React.Suspense>
                        : <>
                            <SumraHeader />
                            <SumraLeftPanel />
                            <React.Suspense fallback={<div>Loading....</div>}>
                                <Switch>
                                    <Redirect exact from="/" to="/chats" />
                                    <Route path="/chats">
                                        <MatrixClientContext.Provider value={this._matrixClient}>
                                            <div
                                                onPaste={this._onPaste}
                                                onKeyDown={this._onReactKeyDown}
                                                className='mx_MatrixChat_wrapper'
                                                aria-hidden={this.props.hideToSRUsers}
                                            >
                                                <ToastContainer />
                                                <div ref={this._resizeContainer} className={bodyClasses}>
                                                    { SpaceStore.spacesEnabled ? <SpacePanel /> : null }

                                                    <LeftPanel
                                                        isMinimized={this.props.collapseLhs || false}
                                                        resizeNotifier={this.props.resizeNotifier}
                                                        
                                                    />
                                                    {/*   <ResizeHandle /> */}
                                                    { pageElement }
                                     e           </div>
                                            </div>
                                            <CallContainer />
                                            <NonUrgentToastContainer />
                                            <HostSignupContainer />
                                            {audioFeedArraysForCalls}
                                        </MatrixClientContext.Provider>
                                    </Route>

                                    <Route path="/referrals" component={SumraReferrals} />
                                    <Route path="/leaderboard" component={SumraLeaderboard} />
                                    <Route path="/global-earnings" component={SumraGlobalEarnings} />
                                    <Route path="/statistics" component={SumraStatistics} />
                                    <Route path="/any/divits" component={SumraDivitsBonusPlaza} />
                               {/*      <Route path="/pioneer-membership" component={SumraPioneerMembership} /> */}
                                    <Route path="/divits-bonus-plaza" component={SumraDivitsBonusPlaza} />
                                    <Route path="/rewards" component={SumraRewards} />

                                </Switch>
                            </React.Suspense>

                        </>}
                </Provider>
            </Router>
        );
    }
}

export default LoggedInView;
