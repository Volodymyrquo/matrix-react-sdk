/*
Copyright 2015, 2016 OpenMarket Ltd
Copyright 2019, 2021 The Matrix.org Foundation C.I.C.

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

import React from 'react';
import classNames from 'classnames';
import { _t } from '../../../languageHandler';
import { MatrixClientPeg } from '../../../MatrixClientPeg';

import SettingsStore from "../../../settings/SettingsStore";
import RoomHeaderButtons from '../right_panel/RoomHeaderButtons';
import E2EIcon from './E2EIcon';
import DecoratedRoomAvatar from "../avatars/DecoratedRoomAvatar";
import AccessibleTooltipButton from "../elements/AccessibleTooltipButton";
import RoomTopic from "../elements/RoomTopic";
import RoomName from "../elements/RoomName";
import { PlaceCallType } from "../../../CallHandler";
import { replaceableComponent } from "../../../utils/replaceableComponent";
import { throttle } from 'lodash';
import { MatrixEvent, Room, RoomState } from 'matrix-js-sdk/src';
import { E2EStatus } from '../../../utils/ShieldUtils';
import { IOOBData } from '../../../stores/ThreepidInviteStore';
import { SearchScope } from './SearchBar';
import { Context } from '../../../contexts/Routes/context';

export interface ISearchInfo {
    searchTerm: string;
    searchScope: SearchScope;
    searchCount: number;
}

interface IProps {
    room: Room;
    oobData?: IOOBData;
    inRoom: boolean;
    onSettingsClick: () => void;
    onSearchClick: () => void;
    onForgetClick: () => void;
    onCallPlaced: (type: PlaceCallType) => void;
    onAppsClick: () => void;
    e2eStatus: E2EStatus;
    appsShown: boolean;
    searchInfo: ISearchInfo;
}

@replaceableComponent("views.rooms.RoomHeader")
export default class RoomHeader extends React.Component<IProps> {
    static defaultProps = {
        editing: false,
        inRoom: false,
    };
static contextType = Context;
public componentDidMount() {
    const cli = MatrixClientPeg.get();
    cli.on("RoomState.events", this.onRoomStateEvents);
}

public componentWillUnmount() {
    const cli = MatrixClientPeg.get();
    if (cli) {
        cli.removeListener("RoomState.events", this.onRoomStateEvents);
    }
}

    private onRoomStateEvents = (event: MatrixEvent, state: RoomState) => {
        if (!this.props.room || event.getRoomId() !== this.props.room.roomId) {
            return;
        }

        // redisplay the room name, topic, etc.
        this.rateLimitedUpdate();
    };

    private rateLimitedUpdate = throttle(() => {
        this.forceUpdate();
    }, 500, { leading: true, trailing: true });

    public render() {
        let searchStatus = null;

        // don't display the search count until the search completes and
        // gives us a valid (possibly zero) searchCount.
        if (this.props.searchInfo &&
            this.props.searchInfo.searchCount !== undefined &&
            this.props.searchInfo.searchCount !== null) {
            searchStatus = <div className="mx_RoomHeader_searchStatus">&nbsp;
                { _t("(~%(count)s results)", { count: this.props.searchInfo.searchCount }) }
            </div>;
        }

        // XXX: this is a bit inefficient - we could just compare room.name for 'Empty room'...
        let settingsHint = false;
        const members = this.props.room ? this.props.room.getJoinedMembers() : undefined;
        if (members) {
            if (members.length === 1 && members[0].userId === MatrixClientPeg.get().credentials.userId) {
                const nameEvent = this.props.room.currentState.getStateEvents('m.room.name', '');
                if (!nameEvent || !nameEvent.getContent().name) {
                    settingsHint = true;
                }
            }
        }

        let oobName = _t("Join Room");
        if (this.props.oobData && this.props.oobData.name) {
            oobName = this.props.oobData.name;
        }

        const textClasses = classNames('mx_RoomHeader_nametext', { mx_RoomHeader_settingsHint: settingsHint });
        const name =
            <div className="mx_RoomHeader_name" onClick={this.props.onSettingsClick}>
                <RoomName room={this.props.room}>
                    {(name) => {
                        const roomName = name || oobName;
                        return <div dir="auto" className={textClasses} title={roomName}>{ roomName }</div>;
                    }}
                </RoomName>
                { searchStatus }
            </div>;

        const topicElement = <RoomTopic room={this.props.room}>
            {(topic, ref) => <div className="mx_RoomHeader_topic" ref={ref} title={topic} dir="auto">
                { topic }
            </div>}
        </RoomTopic>;

        let roomAvatar;
        if (this.props.room) {
            roomAvatar = <DecoratedRoomAvatar
                room={this.props.room}
                avatarSize={32}
                oobData={this.props.oobData}
                viewAvatarOnClick={true}
            />;
        }

        let forgetButton;
        if (this.props.onForgetClick) {
            forgetButton =
                <AccessibleTooltipButton
                    className="mx_RoomHeader_button mx_RoomHeader_forgetButton"
                    onClick={this.props.onForgetClick}
                    title={_t("Forget room")} />;
        }

        let appsButton;
        if (this.props.onAppsClick) {
            appsButton =
                <AccessibleTooltipButton
                    className={classNames("mx_RoomHeader_button mx_RoomHeader_appsButton", {
                        mx_RoomHeader_appsButton_highlight: this.props.appsShown,
                    })}
                    onClick={this.props.onAppsClick}
                    title={this.props.appsShown ? _t("Hide Widgets") : _t("Show Widgets")} />;
        }

        let searchButton;
        if (this.props.onSearchClick && this.props.inRoom) {
            searchButton =
                <AccessibleTooltipButton
                    className="mx_RoomHeader_button mx_RoomHeader_searchButton"
                    onClick={this.props.onSearchClick}
                    title={_t("Search")} />;
        }

        let voiceCallButton;
        let videoCallButton;
        if (this.props.inRoom && SettingsStore.getValue("showCallButtonsInComposer")) {
            voiceCallButton =
                <AccessibleTooltipButton
                    className="mx_RoomHeader_button mx_RoomHeader_voiceCallButton"
                    onClick={() => this.props.onCallPlaced(PlaceCallType.Voice)}
                    title={_t("Voice call")} />;
            videoCallButton =
                <AccessibleTooltipButton
                    className="mx_RoomHeader_button mx_RoomHeader_videoCallButton"
                    onClick={(ev) => this.props.onCallPlaced(
                        ev.shiftKey ? PlaceCallType.ScreenSharing : PlaceCallType.Video)}
                    title={_t("Video call")} />;
        }

        const rightRow =
            <div className="mx_RoomHeader_buttons">

                { voiceCallButton }
                { videoCallButton }
                {/*    { forgetButton }
                { appsButton }
                { searchButton }  */}
                <svg className="sumra-roomHeader" onClick={this.context.toggleMxLeftPanel} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="5" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="12" cy="19" r="2" />
                </svg>
            </div>;

        const e2eIcon = this.props.e2eStatus ? <E2EIcon status={this.props.e2eStatus} /> : undefined;

        return (
            <div className="mx_RoomHeader light-panel">
                <div className="mx_RoomHeader_wrapper" aria-owns="mx_RightPanel">
                    <div className="mx_RoomHeader_avatar">{ roomAvatar }</div>
                    <div className="mx_RoomHeader_e2eIcon">{ e2eIcon }</div>
                    { name }
                    { topicElement }
                    { rightRow }
                    {/*  <RoomHeaderButtons room={this.props.room} /> */}
                </div>
            </div>
        );
    }
}
