import React from "react";
import SidebarReferrals from "./SidebarReferrals";
import { ContactBookProvider } from "../../../context/ContactBook/contextContactBook";

const Referrals = () => {
    return (
        <div className="sumra-referrals-main" >
                        <ContactBookProvider>

          <SidebarReferrals />
          </ContactBookProvider>

        </div>
    );
};

export default Referrals;
