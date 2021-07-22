import React from "react";
import SidebarReferrals from "../SidebarReferrals";
import { ContactBookProvider } from "../../../../contexts/ContactBook/contextContactBook";

const Statistics = () => {
    return (
        <div className="sumra-referrals-main" >
            <ContactBookProvider>

                <SidebarReferrals />
                <div style={{ position: 'absolute', top: "200px", right: "300px" }}>

                    <h1 style={{ fontSize: "x-large", fontWeight: "bolder", color: "blueviolet" }}>Hello from Statistics</h1>

                </div>
            </ContactBookProvider>

        </div>
    );
};

export default Statistics;
