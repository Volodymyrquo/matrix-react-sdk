import React, { useContext } from "react";
import SidebarReferrals from "./SidebarReferrals";
import { ReferralsProvider } from "../../../contexts/Referrals/contextReferrals";
import { Context } from "../../../contexts/Routes/context";

const Referrals = () => {
    const { subpage } = useContext(Context);

    return (
        <div className="sumra-referrals-main" >

            <ReferralsProvider>
                <SidebarReferrals />

                    {subpage}
            </ReferralsProvider>

        </div>
    );
};

export default Referrals;
