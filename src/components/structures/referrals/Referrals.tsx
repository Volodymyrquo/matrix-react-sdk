import React, { useContext, FC } from "react";
import SidebarReferrals from "./SidebarReferrals";
import { ReferralsProvider } from "../../../contexts/Referrals/contextReferrals";
import { ContactBookProvider } from "../../../contexts/ContactBook/contextContactBook";

import { Context } from "../../../contexts/Routes/context";

const Referrals: FC = () => {
    const { subpage } = useContext(Context);

    return (
        <div className="sumra-referrals-main" >

            <ReferralsProvider>
                <SidebarReferrals />
                <ContactBookProvider>
                    <div className="referrals-page">
                        {subpage}
                    </div>
                </ContactBookProvider>

            </ReferralsProvider>

        </div>
    );
};

export default Referrals;
