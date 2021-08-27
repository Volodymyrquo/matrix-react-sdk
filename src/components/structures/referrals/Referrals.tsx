import React, { useContext, FC } from "react";
import SidebarReferrals from "./SidebarReferrals";
import { ReferralsProvider } from "../../../contexts/Referrals/contextReferrals";
import { ContactBookProvider } from "../../../contexts/ContactBook/contextContactBook";
import ReferralsHeader from "./ReferralsHeader.jsx";
import Dashboard from "component-sumrachat-dashboard";

import { Context } from "../../../contexts/Routes/context";

const Referrals: FC = () => {
    const { subpage } = useContext(Context);

    return (
        <div className="sumra-referrals-main" >
            <Dashboard />
            {/*    <ReferralsProvider>
                <SidebarReferrals />
                <ContactBookProvider>

                    <div className="referrals-page">
                        <ReferralsHeader />
                        {subpage}
                    </div>
                </ContactBookProvider>

            </ReferralsProvider> */}

        </div>
    );
};

export default Referrals;
