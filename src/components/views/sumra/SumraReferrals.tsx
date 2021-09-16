/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Referrals from "component-referrals";
import { ReferralsContext } from "../../../contexts/Referrals/contextReferrals.js";

const SumraReferrals = () => {
    const { actions, state } = useContext(ReferralsContext);
    const history = useHistory();

    const goToPionerMember = () => history.push({
        pathname: '/pioneer-membership',
        state: {
            prevPath: location.pathname,
        },
    });

  /*   const config = {
		routes: {
		    goToPionerMember,
		},
		actions: {
		    actionFetchCodes: actions.getCode,
		    actionGenerateCode: actions.sentCode,
		    actionPostCode: actions.postCode,
		},
		data: {
		    referralCodes: state.referralsCodes,
		    referralCode: state.referralCode,
		},
    	}; */

    debugger; // eslint-disable-line no-debugger

    return (
        <Referrals  />

    );
};

export default SumraReferrals;
