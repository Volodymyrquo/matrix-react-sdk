import React, { FC, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import cn from 'classnames';
import { Context } from "../../../contexts/Routes/context";

const NavigationSidebar: FC = () => {
    const { setSubPage, subpageId } = useContext(Context);
    return (
        <ul className="metismenu list-unstyled" id="side-menu">
            <li

            ><Link to="/referrals"
                    className={cn("referrals__item",
                        { "referrals__item-active": "referralsPage" === subpageId })}
                    onClick={() => {
                        setSubPage("referralsPage");
                    }}
                >
                    <span>referrals</span>
                </Link>

            </li>

            <li>
                <Link
                    to="/referrals"
                    className={cn("referrals__item",
                        { "referrals__item-active": "globalEarnings" === subpageId })}
                    onClick={(e) => {
                        setSubPage("globalEarnings");
                    }}
                >
                    <span>global earnings</span>
                </Link>
            </li>

            <li>
                <Link
                    to="/referrals"
                    className={cn("referrals__item",
                        { "referrals__item-active": "cashbacks" === subpageId })}
                    onClick={() => {
                        setSubPage("cashbacks");
                    }}
                >

                    <span>cashbacks</span>
                </Link>
            </li>
            <li>
                <Link
                    to="/referrals"
                    className={cn("referrals__item",
                        { "referrals__item-active": "leaderboard" === subpageId })}
                    onClick={() => {
                        setSubPage("leaderboard");
                    }}
                >

                    <span>leaderboard</span>
                </Link>
            </li>
            <li>
                <Link
                    to="/referrals"
                    className={cn("referrals__item",
                        { "referrals__item-active": "statistics" === subpageId })}
                    onClick={() => {
                        setSubPage("statistics");
                    }}
                >
                    <span>statistics</span>
                </Link>
            </li>
            <li>
                <Link
                    to="/referrals"
                    className={cn("referrals__item",
                        { "referrals__item-active": "contactBook" === subpageId })}
                    onClick={() => {
                        setSubPage("contactBook");
                    }}
                >
                    <span>contact book</span>
                </Link>
            </li>
            <li>
                <Link
                    to="/referrals"
                    className={cn("referrals__item",
                        { "referrals__item-active": "pioneerMembership" === subpageId })}
                    onClick={() => {
                        setSubPage("pioneerMembership");
                    }}
                >

                    <span>pioneer membership</span>
                </Link>
            </li>
        </ul>
    );
};
export default NavigationSidebar;
