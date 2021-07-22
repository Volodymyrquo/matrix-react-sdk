import React, { FC, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import { Context } from "../../../contexts/Routes/context";

const NavigationSidebar: FC = () => {
    const [allContactsBtn, setAllContactsBtn] = useState(true);
    const [myFavouritesBtn, setMyFavouritesBtn] = useState(false);
    const [recentlyAddedBtn, setRecentlyAddedBtn] = useState(false);
    const [referredContactBook, setReferredContactBook] = useState(false);
    const { setSubPage } = useContext(Context);

    return (
        <ul className="metismenu list-unstyled" id="side-menu">
            <li

            ><Link to="/referrals"
                    className={classNames("referrals__item", {
                "referrals__item-active": allContactsBtn,
                    })}
                    onClick={() => {
                        setAllContactsBtn(true);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(false);
                        setSubPage("referralsPage");
                    }}
                >
                    <span>referrals</span>
                </Link>

            </li>

            <li>
                <Link
                    to="/referrals"
                    className={classNames("referrals__item", {
            "referrals__item-active": myFavouritesBtn,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(true);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(false);
                        setSubPage("globalEarnings");
                    }}
                >
                    <span>global earnings</span>
                </Link>
            </li>

            <li>
                <Link
                    to="/referrals"
                    className={classNames("referrals__item", {
            "referrals__item-active": recentlyAddedBtn,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(true);
                        setReferredContactBook(false);
                        setSubPage("cashbacks");
                    }}
                >
                    <i className="icon-Alarm" />
                    <span>cashbacks</span>
                </Link>
            </li>
            <li>
                <Link
                    to="/referrals"
                    className={classNames("referrals__item", {
            "referrals__item-active": referredContactBook,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(true);
                        setSubPage("leaderboard");
                    }}
                >
                    <i className="icon-Cube" />
                    <span>leaderboard</span>
                </Link>
            </li>
            <li>
                <Link
                    to="/referrals"
                    className={classNames("referrals__item", {
            "referrals__item-active": referredContactBook,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(true);
                        setSubPage("statistics");
                    }}
                >
                    <i className="icon-Cube" />
                    <span>statistics</span>
                </Link>
            </li>
            <li>
                <Link
                    to="/contact_book"
                    className={classNames("referrals__item", {
            "referrals__item-active": referredContactBook,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(true);
                    }}
                >
                    <i className="icon-Cube" />
                    <span>contact book</span>
                </Link>
            </li>
            <li>
                <Link
                    to="/referrals"
                    className={classNames("referrals__item", {
            "referrals__item-active": referredContactBook,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(true);
                        setSubPage("pioneerMembership");
                    }}
                >
                    <i className="icon-Cube" />
                    <span>pioneer membership</span>
                </Link>
            </li>
        </ul>
    );
};
export default NavigationSidebar;
