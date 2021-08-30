import React, { useState } from "react";
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

const NavigationSidebar = () => {
    const [page, setPage] = useState("/chats");
    const windowLocation = window.location.pathname;
    const handleOnClick = (urlClicked) => {
        setPage(urlClicked);
    };
    debugger;
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
                        className={page === `/chats` ? "active" : null}
                        onClick={() => {
                            handleOnClick(`/chats`);
                        }}
                    >
                        <img
                            src={page === `/chats` ? saleOrange : saleGrey}
                            alt="sale"
                        />

                        <span className="text">chats</span>
                    </li>
                </Link>
                <Link to="/settings">
                    <li
                        className={page === `/settings` ? "active" : null}
                        onClick={() => {
                            handleOnClick(`/settings`);
                        }}
                    >
                        <img
                            src={page === `/settings` ? saleOrange : saleGrey}
                            alt="sale"
                        />
                        <span className="text">settings</span>
                    </li>
                </Link>
            </ul>
            <h2>services</h2>
            <ul>
                <Link to="/referrals">
                    <li
                        className={page === `/referrals` ? "active" : null}
                        onClick={() => {
                            handleOnClick(`/referrals`);
                        }}
                    >
                        <img
                            src={page === `/referrals` ? saleOrange : saleGrey}
                            alt="sale"
                        />
                        <span className="text">referrals</span>
                    </li>
                </Link>
                <Link to="/rewards">
                    <li
                        className={page === `/rewards` ? "active" : null}
                        onClick={() => {
                            handleOnClick(`/rewards`);
                        }}
                    >
                        <img
                            src={page === `/rewards` ? saleOrange : saleGrey}
                            alt="sale"
                        />
                        <span className="text">rewards</span>
                    </li>
                </Link>
                <Link to="/divits-bonus-plaza">
                    <li
                        className={
                            page === `/divits-bonus-plaza` ? "active" : null
                        }
                        onClick={() => {
                            handleOnClick(`/divits-bonus-plaza`);
                        }}
                    >
                        <img
                            src={
                                page === `/divits-bonus-plaza`
                                    ? saleOrange
                                    : saleGrey
                            }
                            alt="sale"
                        />
                        <span className="text">divits bonus plaza</span>
                    </li>
                </Link>
                <Link to="/global-earnings">
                    <li
                        className={
                            page === `/global-earnings` ? "active" : null
                        }
                        onClick={() => {
                            handleOnClick(`/global-earnings`);
                        }}
                    >
                        <img
                            src={
                                page === `/global-earnings`
                                    ? saleOrange
                                    : saleGrey
                            }
                            alt="sale"
                        />
                        <span className="text"> global earnings</span>
                    </li>
                </Link>
                <Link to="/leaderboard">
                    <li
                        className={page === `/leaderboard` ? "active" : null}
                        onClick={() => {
                            handleOnClick(`/leaderboard`);
                        }}
                    >
                        <img
                            src={
                                page === `/leaderboard`
                                    ? weightOrange
                                    : weightGrey
                            }
                            alt="sale"
                        />
                        <span className="text">leaderboard</span>
                    </li>
                </Link>
                <Link to="statistics">
                    <li
                        className={page === `/statistics` ? "active" : null}
                        onClick={() => {
                            handleOnClick(`/statistics`);
                        }}
                    >
                        <img
                            src={
                                page === `/statistics`
                                    ? chartPieOrange
                                    : chartPieGrey
                            }
                            alt="sale"
                        />
                        <span className="text">statistics</span>
                    </li>
                </Link>
                <Link to="contact-book">
                    <li
                        className={page === `/contact-book` ? "active" : null}
                        onClick={() => {
                            handleOnClick(`/contact-book`);
                        }}
                    >
                        <img
                            src={
                                page === `/contact-book`
                                    ? adressBookOrange
                                    : adressBookGrey
                            }
                            alt="sale"
                        />
                        <span className="text">contact book</span>
                    </li>
                </Link>
                <Link to="pioneer-membership">
                    <li
                        className={
                            page === `/pioneer-membership` ? "active" : null
                        }
                        onClick={() => {
                            handleOnClick(`/pioneer-membership`);
                        }}
                    >
                        <img
                            src={
                                page === `/pioneer-membership`
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
