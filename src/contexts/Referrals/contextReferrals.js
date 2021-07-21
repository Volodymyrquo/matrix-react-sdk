import React, { useReducer, createContext } from "react";
import reducerReferrals from "./reducerReferrals";
import { initialState } from "./reducerReferrals";
import {
    ACTIVE_UPDRADE_BUTTON,
    ACTIVE_PAY_BUTTON,
    ACTIVE_BASIC,
    ACTIVE_BRONZE,
    ACTIVE_SILVER,
    ACTIVE_GOLD,
    ACTIVE_BUTTON_BRONZE,
    ACTIVE_BUTTON_SILVER,
    ACTIVE_BUTTON_GOLD,
} from "./actionTypes";

export const ReferralsContext = createContext(initialState);

export const ReferralsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerReferrals, initialState);
    const actions = {
        activeUpdradeButton: (activeUpdrade) =>
            dispatch({
                type: ACTIVE_UPDRADE_BUTTON,
                activeUpdrade,
            }),
        activePayButton: (activePay) =>
            dispatch({
                type: ACTIVE_PAY_BUTTON,
                activePay,
            }),
        activeBasicButton: (activeBasic) =>
            dispatch({
                type: ACTIVE_BASIC,
                activeBasic,
            }),
        activeBronzeButton: (activeBronze) =>
            dispatch({
                type: ACTIVE_BRONZE,
                activeBronze,
            }),
        activeSilverButton: (activeSilver) =>
            dispatch({
                type: ACTIVE_SILVER,
                activeSilver,
            }),
        activeGoldButton: (activeGold) =>
            dispatch({
                type: ACTIVE_GOLD,
                activeGold,
            }),
        nameBronzeButton: (nameBronzeBtn) =>
            dispatch({
                type: ACTIVE_BUTTON_BRONZE,
                nameBronzeBtn,
            }),
        nameSilverButton: (nameSilverBtn) =>
            dispatch({
                type: ACTIVE_BUTTON_SILVER,
                nameSilverBtn,
            }),
        nameGoldButton: (nameGoldBtn) =>
            dispatch({
                type: ACTIVE_BUTTON_GOLD,
                nameGoldBtn,
            }),
    };

    return (
        <ReferralsContext.Provider value={{ state, actions }}>
            {children}
        </ReferralsContext.Provider>
    );
};
