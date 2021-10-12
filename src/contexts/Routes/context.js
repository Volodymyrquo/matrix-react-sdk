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
    const setBurger = (burger) =>
        dispatch({
            type: "SET_BURGER",
            payload: burger,
        });

    const subpages = {
        referralsPage: <ReferralsPage />,
        globalEarnings: <GlobalEarnings path={"/referrals"} />,
        leaderboard: <LeaderboardTable />,
        statistics: <Statistics path={"/referrals"} />,
        pioneerMembership: <PioneerMembership />,
    };

    const subpage = subpages[state.subpageId];
    const { params, subpageId, tableId, pageTitle } = state;
    return (
        <Context.Provider
            value={{
                setBurger,
                setPageTitle,
                params,
                subpage,
                subpageId,
                tableId,
                pageTitle,
            }}
        >
            {children}
        </Context.Provider>
    );
};
