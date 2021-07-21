import React, { FC, useState, useContext } from 'react';
import {Link} from "react-router-dom"
import classNames from 'classnames';
import { Context } from "../../../contexts/Routes/context";

const NavigationSidebar: FC = () => {
    const [allContactsBtn, setAllContactsBtn] = useState(true);
    const [myFavouritesBtn, setMyFavouritesBtn] = useState(false);
    const [recentlyAddedBtn, setRecentlyAddedBtn] = useState(false);
    const [referredContactBook, setReferredContactBook] = useState(false);
    const { setPage, setTable } = useContext(Context);

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
                    }}
                >
                    <span>referrals</span>
                </Link>

            </li>

            <li>
                <Link
                    to="/globalEarnings"
                    className={classNames("referrals__item", {
            "referrals__item-active": myFavouritesBtn,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(true);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(false);
                    }}
                >
                    <span>global earnings</span>
                </Link>
            </li>

            <li>
                <a
                    href="/#/contact_book"
                    className={classNames("referrals__item", {
            "referrals__item-active": recentlyAddedBtn,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(true);
                        setReferredContactBook(false);
                        setTable("recentlyAdded");
                        setPage("contactBook");
                    }}
                >
                    <i className="icon-Alarm" />
                    <span>cashbacks</span>
                </a>
            </li>
            <li>
                <a
                    href="/#/contact_book"
                    className={classNames("referrals__item", {
            "referrals__item-active": referredContactBook,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(true);
                        setTable("referred");
                        setPage("contactBook");
                    }}
                >
                    <i className="icon-Cube" />
                    <span>leaderboard</span>
                </a>
            </li>
            <li>
                <a
                    href="/#/contact_book"
                    className={classNames("referrals__item", {
            "referrals__item-active": referredContactBook,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(true);
                        setTable("referred");
                        setPage("contactBook");
                    }}
                >
                    <i className="icon-Cube" />
                    <span>statistics</span>
                </a>
            </li>
            <li>
                <a
                    href="/#/contact_book"
                    className={classNames("referrals__item", {
            "referrals__item-active": referredContactBook,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(true);
                        setTable("referred");
                        setPage("contactBook");
                    }}
                >
                    <i className="icon-Cube" />
                    <span>contact book</span>
                </a>
            </li>
            <li>
                <a
                    href="/#/contact_book"
                    className={classNames("referrals__item", {
            "referrals__item-active": referredContactBook,
                    })}
                    onClick={() => {
                        setAllContactsBtn(false);
                        setMyFavouritesBtn(false);
                        setRecentlyAddedBtn(false);
                        setReferredContactBook(true);
                        setTable("referred");
                        setPage("contactBook");
                    }}
                >
                    <i className="icon-Cube" />
                    <span>pioneer membership</span>
                </a>
            </li>
        </ul>
    );
};
export default NavigationSidebar;
