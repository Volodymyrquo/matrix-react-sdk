import React, { useContext } from "react";
import GlobalEarningsBtn from "../../../views/referrals/globalEarnings/GlobalEarningsBtn";
import { Context } from "../../../../contexts/Routes/context";
const GlobalEarnings = () => {
    const { table } = useContext(Context);
    return (
        <div className="referrals-page" style={{ padding: "30px" }}>
            <GlobalEarningsBtn />
            {table}
        </div>
    );
};

export default GlobalEarnings;
