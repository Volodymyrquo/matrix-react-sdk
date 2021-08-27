import React, { useState } from "react";
import { Link } from "react-router-dom";
import referrals from "../../../../res/images/sumra/referrals.png";
import sumraLogo from "../../../../res/images/sumra/sumra-logo.svg";

const NavigationSidebar = () => {
    const windowLocation = window.location.pathname;
    const [activeButton, setActiveButton] = useState("/referrals_program");
    const handleOnClick = (urlClicked) => {
        setActiveButton(urlClicked);
    };

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
                        <span className="icon-Group-chat img">
                            <span
                                className={
                                    windowLocation === `/chats`
                                        ? "path1 orange-dark"
                                        : "path1 grey"
                                }
                            />
                            <span
                                className={
                                    windowLocation === `/chats`
                                        ? "path2 orange-light"
                                        : "path2 grey"
                                }
                            />
                        </span>

                        <span className="text">chats</span>
                    </li>
                </Link>
                <Link to="/settings">
                    <li
                        className={
                            windowLocation === `/settings` ? "active" : null
                        }
                        onClick={() => {
                            handleOnClick(`/settings`);
                        }}
                    >
                        <span className="icon-Settings-switch img">
                            <span
                                className={
                                    windowLocation === `/settings`
                                        ? "path1 orange-dark"
                                        : "path1 grey"
                                }
                            />
                            <span
                                className={
                                    windowLocation === `/settings`
                                        ? "path2 orange-light"
                                        : "path2 grey"
                                }
                            />
                        </span>
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
                        <span className="icon-Group img">
                            <span
                                className={
                                    windowLocation === `/referrals`
                                        ? "path1 orange-dark"
                                        : "path1 grey"
                                }
                            />
                            <span
                                className={
                                    windowLocation === `/referrals`
                                        ? "path2 orange-light"
                                        : "path2 grey"
                                }
                            />
                        </span>
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
                        <span className="icon-Half-start img">
                            <span
                                className={
                                    windowLocation === `/rewards`
                                        ? "path1 orange-dark"
                                        : "path1 grey"
                                }
                            />
                            <span
                                className={
                                    windowLocation === `/rewards`
                                        ? "path2 orange-light"
                                        : "path2 grey"
                                }
                            />
                        </span>
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
                        <span className="icon-Divits img">
                            <span
                                className={
                                    windowLocation === `/divits-bonus-plaza`
                                        ? "path1 orange-light"
                                        : "path1 grey"
                                }
                            />
                            <span
                                className={
                                    windowLocation === `/divits-bonus-plaza`
                                        ? "path2 orange-light"
                                        : "path2 grey"
                                }
                            />
                            <span
                                className={
                                    windowLocation === `/divits-bonus-plaza`
                                        ? "path3 orange-light"
                                        : "path3 grey"
                                }
                            />
                            <span
                                className={
                                    windowLocation === `/divits-bonus-plaza`
                                        ? "path4 orange-light"
                                        : "path4 grey"
                                }
                            />
                            <span
                                className={
                                    windowLocation === `/divits-bonus-plaza`
                                        ? "path5 orange-light"
                                        : "path5 grey"
                                }
                            />
                            <span
                                className={
                                    windowLocation === `/divits-bonus-plaza`
                                        ? "path6 orange-light"
                                        : "path6 grey"
                                }
                            />
                            <span
                                className={
                                    windowLocation === `/divits-bonus-plaza`
                                        ? "path7 orange-dark"
                                        : "path7 grey"
                                }
                            />
                            <span
                                className={
                                    windowLocation === `/divits-bonus-plaza`
                                        ? "path8 orange-light"
                                        : "path8 grey"
                                }
                            />
                        </span>
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
                        <span className="icon-Money img">
                            <span
                                className={
                                    windowLocation === `/global-earnings`
                                        ? "path1 orange-dark"
                                        : "path1 grey"
                                }
                            />
                            <span
                                className={
                                    windowLocation === `/global-earnings`
                                        ? "path2 orange-light"
                                        : "path2 grey"
                                }
                            />
                        </span>
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
                        <span className="icon-Weight img">
                            <span
                                className={
                                    windowLocation === `/leaderboard`
                                        ? "path1 orange-dark"
                                        : "path1 grey"
                                }
                            />
                            <span
                                className={
                                    windowLocation === `/leaderboard`
                                        ? "path2 orange-light"
                                        : "path2 grey"
                                }
                            />
                        </span>
                        <span className="text">leaderboard</span>
                    </li>
                </Link>
                <Link to="statistics">
                    <li
                        className={
                            windowLocation === `/statistics` ? "active" : null
                        }
                        onClick={() => {
                            handleOnClick(`/statistics`);
                        }}
                    >
                        <span className="icon-Chart-pie img">
                            <span
                                className={
                                    windowLocation === `/statistics`
                                        ? "path1 orange-dark"
                                        : "path1 grey"
                                }
                            />
                            <span
                                className={
                                    windowLocation === `/statistics`
                                        ? "path2 orange-light"
                                        : "path2 grey"
                                }
                            />
                        </span>
                        <span className="text">statistics</span>
                    </li>
                </Link>
                <Link to="contact-book">
                    <li
                        className={
                            windowLocation === `/contact-book` ? "active" : null
                        }
                        onClick={() => {
                            handleOnClick(`/contact-book`);
                        }}
                    >
                        <span className="icon-Adress-book img">
                            <span
                                className={
                                    windowLocation === `/contact-book`
                                        ? "path1 orange-dark"
                                        : "path1 grey"
                                }
                            />
                            <span
                                className={
                                    windowLocation === `/contact-book`
                                        ? "path2 orange-light"
                                        : "path2 grey"
                                }
                            />
                        </span>
                        <span className="text">contact book</span>
                    </li>
                </Link>
                <Link to="pioneer-membership">
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
                        <span className="icon-Sale img">
                            <span
                                className={
                                    windowLocation === `/pioneer-membership`
                                        ? "path1 orange-dark"
                                        : "path1 grey"
                                }
                            />
                            <span
                                className={
                                    windowLocation === `/pioneer-membership`
                                        ? "path2 orange-light"
                                        : "path2 grey"
                                }
                            />
                        </span>
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
