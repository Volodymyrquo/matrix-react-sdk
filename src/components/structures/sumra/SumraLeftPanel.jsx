import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import referrals from "../../../../res/images/sumra/referrals.png";
import sumraLogo from "../../../../res/images/sumra/sumra-logo.svg";
import saleGrey from "../../../../res/images/sumra/Sale-grey.svg";
import saleOrange from "../../../../res/images/sumra/Sale-orange.svg";
import chartPieGrey from "../../../../res/images/sumra/Chart-pie-grey.svg";
import chartPieOrange from "../../../../res/images/sumra/Chart-pie-orange.svg";
import adressBookGrey from "../../../../res/images/sumra/Adress-book-grey.svg";
import adressBookOrange from "../../../../res/images/sumra/Adress-book-orange.svg";
import weightGrey from "../../../../res/images/sumra/Weigh-grey.svg";
import weightOrange from "../../../../res/images/sumra/Weigh-orange.svg";
import divitsGrey from "../../../../res/images/sumra/Divits-grey.svg";
import divitsOrange from "../../../../res/images/sumra/Divits-orange.svg";
import moneyGrey from "../../../../res/images/sumra/Money-grey.svg";
import moneyOrange from "../../../../res/images/sumra/Money-orange.svg";
import settingsSwitchGrey from "../../../../res/images/sumra/Settings-switch-grey.svg";
import settingsSwitchOrange from "../../../../res/images/sumra/Settings-switch-orange.svg";
import halfStarGrey from "../../../../res/images/sumra/Half-star-grey.svg";
import halfStarOrange from "../../../../res/images/sumra/Half-star-orange.svg";
import groupPeopleGrey from "../../../../res/images/sumra/Group-people-grey.svg";
import groupPeopleOrange from "../../../../res/images/sumra/Group-people-orange.svg";
import groupChatGrey from "../../../../res/images/sumra/Group-chat-grey.svg";
import groupChatOrange from "../../../../res/images/sumra/Group-chat-orange.svg";

const NavigationSidebar = () => {
    const [page, setPage] = useState("/chats");
    let windowLocation = window.location.pathname;
    const handleOnClick = (urlClicked) => {
        setPage(urlClicked);
    };
    useEffect(() => {
        windowLocation = window.location.pathname;
    }, [window.location.pathname]);

    const windowHostName = window.location.hostname;
    return (
        <nav className="sumra-nav-bar">
            <div className="sumra-nav-bar-logo-block">
                <img src={sumraLogo} alt="logo" />
                <span> Sumrachat</span>
            </div>
            <h2>personal</h2>
            <ul>
                <Link to="/chats">
                    <li
                        className={
                            windowLocation === `/chats` ? "active" : null
                        }
                        onClick={() => {
                            handleOnClick(`/chats`);
                        }}
                    >
                        <img
                            src={
                                windowLocation === `/chats` || `#/home`
                                    ? groupChatOrange
                                    : groupChatGrey
                            }
                            alt="group chat"
                        />

                        <span className="text">chats</span>
                    </li>
                </Link>
                <Link to="#/settings">
                    <li
                        className={
                            windowLocation === `#/settings` ? "active" : null
                        }
                        onClick={async (event) => {
                            event.preventDefault();
                            handleOnClick(`/settings`);
                            location.href = location.origin + "/#/settings";
                        }}
                    >
                        <img
                            src={
                                windowLocation === `#/settings`
                                    ? settingsSwitchOrange
                                    : settingsSwitchGrey
                            }
                            alt="settings switch"
                        />
                        <span className="text">settings</span>
                    </li>
                </Link>
            </ul>
            <h2>services</h2>
            <ul>
                <Link to="/referrals">
                    <li
                        className={
                            windowLocation === `/referrals` ? "active" : null
                        }
                        onClick={() => {
                            handleOnClick(`/referrals`);
                        }}
                    >
                        <img
                            src={
                                windowLocation === `/referrals`
                                    ? groupPeopleOrange
                                    : groupPeopleGrey
                            }
                            alt="group people"
                        />
                        <span className="text">referrals</span>
                    </li>
                </Link>
                <Link to="/rewards">
                    <li
                        className={
                            windowLocation === `/rewards` ? "active" : null
                        }
                        onClick={() => {
                            handleOnClick(`/rewards`);
                        }}
                    >
                        <img
                            src={
                                windowLocation === `/rewards`
                                    ? halfStarOrange
                                    : halfStarGrey
                            }
                            alt="half star"
                        />
                        <span className="text">rewards</span>
                    </li>
                </Link>
                <Link to="/divits-bonus-plaza">
                    <li
                        className={
                            windowLocation === `/divits-bonus-plaza`
                                ? "active"
                                : null
                        }
                        onClick={() => {
                            handleOnClick(`/divits-bonus-plaza`);
                        }}
                    >
                        <img
                            src={
                                windowLocation === `/divits-bonus-plaza`
                                    ? divitsOrange
                                    : divitsGrey
                            }
                            alt="divits"
                        />
                        <span className="text">divits bonus plaza</span>
                    </li>
                </Link>
                <Link to="/global-earnings">
                    <li
                        className={
                            windowLocation === `/global-earnings`
                                ? "active"
                                : null
                        }
                        onClick={() => {
                            handleOnClick(`/global-earnings`);
                        }}
                    >
                        <img
                            src={
                                windowLocation === `/global-earnings`
                                    ? moneyOrange
                                    : moneyGrey
                            }
                            alt="money"
                        />
                        <span className="text"> global earnings</span>
                    </li>
                </Link>
                <Link to="/leaderboard">
                    <li
                        className={
                            windowLocation === `/leaderboard` ? "active" : null
                        }
                        onClick={() => {
                            handleOnClick(`/leaderboard`);
                        }}
                    >
                        <img
                            src={
                                windowLocation === `/leaderboard`
                                    ? weightOrange
                                    : weightGrey
                            }
                            alt="weight"
                        />
                        <span className="text">leaderboard</span>
                    </li>
                </Link>
                <Link to="/statistics">
                    <li
                        className={
                            windowLocation === `/statistics` ? "active" : null
                        }
                        onClick={() => {
                            handleOnClick(`/statistics`);
                        }}
                    >
                        <img
                            src={
                                windowLocation === `/statistics`
                                    ? chartPieOrange
                                    : chartPieGrey
                            }
                            alt="chart pie"
                        />
                        <span className="text">statistics</span>
                    </li>
                </Link>
                <Link to="/contact_book">
                    <li
                        className={
                            windowLocation === `/contact_book` ? "active" : null
                        }
                        onClick={() => {
                            handleOnClick(`/contact_book`);
                        }}
                    >
                        <img
                            src={
                                windowLocation === `/contact-book`
                                    ? adressBookOrange
                                    : adressBookGrey
                            }
                            alt="adress book"
                        />
                        <span className="text">contact book</span>
                    </li>
                </Link>
                <Link to="/pioneer-membership">
                    <li
                        className={
                            windowLocation === `/pioneer-membership`
                                ? "active"
                                : null
                        }
                        onClick={() => {
                            handleOnClick(`/pioneer-membership`);
                        }}
                    >
                        <img
                            src={
                                windowLocation === `/pioneer-membership`
                                    ? saleOrange
                                    : saleGrey
                            }
                            alt="sale"
                        />
                        <span className="text">pioneer membership</span>
                    </li>
                </Link>
            </ul>
            <div className="sumra-nav-bar-referrals">
                <img src={referrals} alt="Get earn" />
                <div className="sumra-nav-bar-earn">
                    <span>
                        Get up to <span>$250</span> for Referrals. <br /> Earn
                        Unlimited.
                    </span>
                </div>
                <button className="sumra-nav-bar-button">
                    <span>Learn more -&gt;</span>
                </button>
            </div>
        </nav>
    );
};

export default NavigationSidebar;
