import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
import { initialState } from "./contextReducer";
import ReferralsPage from "referrals";
import GlobalEarnings from "global-earnings";
import LeaderboardTable from "leaderboard";
import Statistics from "global-earnings";
import PioneerMembership from "pioneer-membership";

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(contextReducer, initialState);

    const setPageTitle = (pageTitle) =>
        dispatch({
            type: "SET_PAGE_TITLE",
            payload: pageTitle,
        });
    const toggleMxLeftPanel = () =>
        dispatch({
            type: "TOGGLE_MX_LEFT_PANEL",
        });

    const subpages = {
        referralsPage: <ReferralsPage />,
        globalEarnings: <GlobalEarnings path={"/referrals"} />,
        leaderboard: <LeaderboardTable />,
        statistics: <Statistics path={"/referrals"} />,
        pioneerMembership: <PioneerMembership />,
    };

    const subpage = subpages[state.subpageId];
    const { pageTitle, isMxLeftMenuVisible } = state;
    return (
        <Context.Provider
            value={{
                setPageTitle,
                toggleMxLeftPanel,
                subpage,
                pageTitle,
                isMxLeftMenuVisible,
            }}
        >
            {children}
        </Context.Provider>
    );
};
