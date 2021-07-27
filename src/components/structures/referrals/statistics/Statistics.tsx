import React, { useContext } from "react";
import { Context } from "../../../../contexts/Routes/context";
import GlobalEarningsBtn from "../../../views/referrals/globalEarnings/GlobalEarningsBtn";

const Statistics = () => {
    const { table } = useContext(Context);
    return (
        <div className="sumra-referrals-main" >
            <div className="referrals-page">
                <GlobalEarningsBtn />

                {table}
            </div>

        </div>
    );
};

export default Statistics;
