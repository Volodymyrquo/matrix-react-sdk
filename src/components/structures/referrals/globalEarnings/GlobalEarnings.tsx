import React, { useContext } from "react";
import GlobalEarningsBtn from "../../../views/referrals/globalEarnings/GlobalEarningsBtn";
import { Context } from "../../../../contexts/Routes/context";
import Earnings from 'global-earnings';
import {useRouteMatch} from "react-router-dom"
const GlobalEarnings = () => {
    const { table } = useContext(Context);
    const {path} = useRouteMatch()
    return (
        <div className="referrals-page" style={{ padding: "30px" }}>
            <Earnings path={path} />
        </div>
    );
};

export default GlobalEarnings;
