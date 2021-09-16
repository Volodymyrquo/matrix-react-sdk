import React, { useReducer, createContext } from "react";
import { initialState } from "./referralsReducer";
import referralReducer from "./referralsReducer";
import {
    REFERRAL_CODE,
    REFERRAL_CODE_POST,
    GENERATE_CODE,
    GET_REFERRALS,
    POST_REFERRALS,
    DELETE_REFERRALS,
    LAST_REFERRAL_CODE,
} from "./actionTypes";

export const ReferralsContext = createContext(initialState);

export const ReferralsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(referralReducer, initialState);
    const actions = {
        getCode: (referralCodes) =>
            dispatch({
                type: REFERRAL_CODE,
                referralCodes,
            }),
        getLastCode: (lastReferralCode) =>
            dispatch({
                type: LAST_REFERRAL_CODE,
                lastReferralCode,
            }),
        postCode: (referralCode) =>
            dispatch({
                type: REFERRAL_CODE_POST,
                referralCode,
            }),
        sentCode: (generateСode) =>
            dispatch({
                type: GENERATE_CODE,
                generateСode,
            }),
        fatchReferrals: () =>
            dispatch({
                type: GET_REFERRALS,
            }),
        postReferrals: (code) =>
            dispatch({
                type: POST_REFERRALS,
                option: {
                    application_id: code,
                },
            }),
        removeReferrals: (id) =>
            dispatch({
                type: DELETE_REFERRALS,
                id,
            }),
    };

    return (
        <ReferralsContext.Provider value={{ state, actions }}>
            {children}
        </ReferralsContext.Provider>
    );
};
