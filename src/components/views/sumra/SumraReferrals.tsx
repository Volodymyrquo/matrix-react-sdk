/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Referrals from "component-referrals";
import { ReferralsContext } from "../../../contexts/Referrals/contextReferrals.js";
import {people} from "../../../../res/helpers/people"

const SumraReferrals = () => {
    const { actions, state } = useContext(ReferralsContext);
    const history = useHistory();

    const goToPionerMember = (pathname) => history.push({
        pathname,
        state: {
            prevPath: location.pathname,
        },
    });

    const config = {
		routes: {
		    goToPionerMember,
		},
		actions: {
		    actionFetchCodes: actions.getCode,
		    actionGenerateCode: actions.sentCode,
		    actionPostCode: actions.postCode,
		},
		data: {
		    referralCodes: state.referralCodes,
		    referralCode: state.referralCode,
			people,
		},
    	};
    

    return (
        <Referrals config={config} />

    );
};

export default SumraReferrals;
