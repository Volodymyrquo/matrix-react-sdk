import React, { useContext } from "react";
import GlobalEarningsBtn from "../../../views/referrals/globalEarnings/GlobalEarningsBtn";
import { Context } from "../../../../contexts/Routes/context";
import GlobalEarning from 'global-earnings';
const GlobalEarnings = () => {
    const { table } = useContext(Context);
    return (
        <div className="referrals-page" style={{ padding: "30px" }}>
            <GlobalEarning />

        </div>
    );
};

export default GlobalEarnings;
