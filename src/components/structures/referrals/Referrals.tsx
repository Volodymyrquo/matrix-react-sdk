import React from "react";
import SidebarReferrals from "./SidebarReferrals";
import { ContactBookProvider } from "../../../context/ContactBook/contextContactBook";
import ReferralsPage from "./ReferralsPage";

const Referrals = () => {
    return (
        <div className="sumra-referrals-main" >
            <ContactBookProvider>

                <SidebarReferrals />
                <ReferralsPage />
            </ContactBookProvider>

        </div>
    );
};

export default Referrals;
