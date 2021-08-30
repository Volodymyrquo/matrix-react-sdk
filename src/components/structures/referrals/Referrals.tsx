import React, { useContext, FC } from "react";
import SidebarReferrals from "./SidebarReferrals";
import { ReferralsProvider } from "../../../contexts/Referrals/contextReferrals";
import { ContactBookProvider } from "../../../contexts/ContactBook/contextContactBook";
import ReferralsHeader from "./ReferralsHeader.jsx";
import ReferralsPage from "component-referrals";
import { Context } from "../../../contexts/Routes/context";
import Leaderboard from 'leaderboard';

const Referrals: FC = () => {
    const { subpage } = useContext(Context);

    return (
        <div className="sumra-referrals-main" >
            <ReferralsProvider>
                <SidebarReferrals />
                <ContactBookProvider>

                    <div className="referrals-page">
                        <ReferralsHeader />
                        {subpage}
                    </div>
                </ContactBookProvider>
            </ReferralsProvider>

        </div>
    );
};

export default Referrals;
