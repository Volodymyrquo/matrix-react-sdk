import React, { FC, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import cn from 'classnames';
import { Context } from "../../../contexts/Routes/context";
import iconCashbacks from "../../../../res/images/sumra/icon-cashbacks.svg";
import iconReferrals from "../../../../res/images/sumra/icon-referrals.svg";
import iconContact from "../../../../res/images/sumra/icon-contact.svg";
import iconGlobal from "../../../../res/images/sumra/icon-global.svg";
import iconLeaderboard from "../../../../res/images/sumra/icon-leaderboard.svg";
import iconPioneer1 from "../../../../res/images/sumra/icon-pioneer1.svg";
import iconRewards from "../../../../res/images/sumra/icon-rewards.svg";
import iconStatistics from "../../../../res/images/sumra/icon-statistics.svg";

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
                    <img src={iconReferrals} alt="referrals" />

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
                    <img src={iconGlobal} alt="global earnings" />

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
                    <img src={iconCashbacks} alt="cashbacks" />
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
                    <img src={iconLeaderboard} alt="leaderboard" />

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
                    <img src={iconStatistics} alt="statistics" />

                    <span>statistics</span>
                </Link>
            </li>
            <li>
                <Link
                    to="/contact_book"
                    className={cn("referrals__item",
                        { "referrals__item-active": "contactBook" === subpageId })}
                    onClick={() => {
                        setSubPage("contactBook");
                    }}
                >
                    <img src={iconContact} alt="contact book" />

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
                    <img src={iconPioneer1} alt="pioneer membership" />

                    <span>pioneer membership</span>
                </Link>
            </li>
        </ul>
    );
};
export default NavigationSidebar;
