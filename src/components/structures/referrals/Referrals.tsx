import React, { useContext, FC } from "react";
import SidebarReferrals from "./SidebarReferrals";
import { PioneerMembershipProvider } from "../../../contexts/PioneerMembership/contextPioneerMembership";
import { ContactBookProvider } from "../../../contexts/ContactBook/contextContactBook";
import ReferralsHeader from "./ReferralsHeader.jsx";
import ReferralsPage from "component-referrals";
import { Context } from "../../../contexts/Routes/context";
import Leaderboard from 'leaderboard';

const Referrals: FC = () => {
    const { subpage } = useContext(Context);

    return (
        <div className="sumra-referrals-main" >
            <PioneerMembershipProvider>
                <SidebarReferrals />
                <ContactBookProvider>

                    <div className="referrals-page">
                        <ReferralsHeader />
                        {subpage}
                    </div>
                </ContactBookProvider>
            </PioneerMembershipProvider>

        </div>
    );
};

export default Referrals;
