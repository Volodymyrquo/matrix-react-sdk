import React, { useContext } from "react";
import GlobalEarningsBtn from "../../../views/referrals/globalEarnings/GlobalEarningsBtn";
import { Context } from "../../../../contexts/Routes/context";
import Earnings from 'global-earnings';
const GlobalEarnings = () => {
    const { table } = useContext(Context);
    return (
        <div className="referrals-page" style={{ padding: "30px" }}>
            <Earnings />
        </div>
    );
};

export default GlobalEarnings;
