import React from "react";
import { ReferralsProvider } from "../../../contexts/Referrals/contextReferrals.js";

import SumraReferrals from "./SumraReferrals";

const SumraReferralsWrapper = () => {
    debugger;

    return (
        <ReferralsProvider>
            <div className="sumra-referrals-main">
                <SumraReferrals />
            </div>
        </ReferralsProvider>
    );
};

export default SumraReferralsWrapper;
