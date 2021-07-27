import React from "react";
import GlobalEarningsBtn from "../../../views/referrals/globalEarnings/GlobalEarningsBtn";
import TotalsBySections from "../../../views/referrals/globalEarnings/statistics/TotalsBySections";

const Statistics = () => {
    return (
        <div className="sumra-referrals-main" >
            <div className="referrals-page">
            <GlobalEarningsBtn />

                <TotalsBySections />
                {/*  <Overview /> */}
            </div>

        </div>
    );
};

export default Statistics;
