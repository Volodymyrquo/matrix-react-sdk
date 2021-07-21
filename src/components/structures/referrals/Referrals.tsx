import React from "react";
import SidebarReferrals from "./SidebarReferrals";
import ReferralsPage from "./ReferralsPage";
import { ReferralsProvider } from "../../../contexts/Referrals/contextReferrals";

const Referrals = () => {
    return (
        <div className="sumra-referrals-main" >

            <ReferralsProvider>
                <SidebarReferrals />
                <ReferralsPage />

            </ReferralsProvider>

        </div>
    );
};

export default Referrals;
