/* eslint-disable no-unused-vars */
import React, { FC, useState, useContext } from 'react';
import { ReferralsContext } from "../../../../contexts/PioneerMembership/contextPioneerMembership";
import {Context} from "../../../../contexts/Routes/context"
import total from '../../../../../res/images/cashbacks/total.svg';
import sum from '../../../../../res/images/cashbacks/sum.svg';
import bronze from '../../../../../res/images/users/bronze.svg';
import silver from '../../../../../res/images/users/silver.svg';
import gold from '../../../../../res/images/users/gold.svg';
import medal from '../../../../../res/images/memberships/Medal.svg';

import perc from '../../../../../res/images/cashbacks/perc.svg';

import facebook from '../../../../../res/images/contactBook/facebook.svg';
import instagram from '../../../../../res/images/contactBook/instagram.svg';
import linkedin from '../../../../../res/images/contactBook/in.svg';
import twitter from '../../../../../res/images/contactBook/twitter.svg';
import pinterest from '../../../../../res/images/contactBook/pinterest.svg';
import discord from '../../../../../res/images/contactBook/discord.svg';
import youtube from '../../../../../res/images/contactBook/youtube.svg';
import zoom from '../../../../../res/images/contactBook/zoom.svg';
import tiktok from '../../../../../res/images/contactBook/tiktok.svg';
import twinch from '../../../../../res/images/contactBook/twinch.svg';

import telegram from '../../../../../res/images/contactBook/telegram.svg';
import whatsapp from '../../../../../res/images/contactBook/whatsapp.svg';
import messanger from '../../../../../res/images/contactBook/messanger.svg';
import viber from '../../../../../res/images/contactBook/viber.svg';
import signal from '../../../../../res/images/contactBook/signal.svg';
import snapchat from '../../../../../res/images/contactBook/snapchat.svg';
import meet from '../../../../../res/images/contactBook/meet.svg';
import skype from '../../../../../res/images/contactBook/skype.svg';
import line from '../../../../../res/images/contactBook/line.svg';
import groupMe from '../../../../../res/images/contactBook/group-me.svg';

import sumrachat from '../../../../../res/images/contactBook/sumrachat.svg';

import sumrameet from '../../../../../res/images/contactBook/sumrameet.svg';

import phone from '../../../../../res/images/contactBook/phone.svg';

import frame1 from '../../../../../res/images/contactBook/frame1.svg';
import frame2 from '../../../../../res/images/contactBook/frame2.svg';
import frame3 from '../../../../../res/images/contactBook/frame3.svg';
import frame4 from '../../../../../res/images/contactBook/frame4.svg';
import frame5 from '../../../../../res/images/contactBook/frame5.svg';
import frame6 from '../../../../../res/images/contactBook/frame6.svg';
import frame7 from '../../../../../res/images/contactBook/frame7.svg';

const icons = [
  facebook,
  instagram,
  linkedin,
  twitter,
  pinterest,
  discord,
  youtube,
  zoom,
  tiktok,
  twinch,
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  frame7,
  phone,
  sumrameet,
  sumrachat,
  telegram,
  whatsapp,
  messanger,
  viber,
  signal,
  snapchat,
  meet,
  skype,
  line,
  groupMe,
];

import { Link } from 'react-router-dom';
import CashbacksChart from './Cashbacks';
import CashbackHistory from './CashbackHistory';

const CashbacksInformation: FC = () => {
    const { state } = useContext(ReferralsContext);
    const { setSubPage} = useContext(Context);
    const [currentPage, setCurrentPage] = useState(1);
    const [showUsers, setShowUsers] = useState(10);
    const [sortUsers, setSortUsers] = useState(icons);
    const indexOfLastUsers = currentPage * showUsers;
    const indexOfFirstUsers = indexOfLastUsers - showUsers;
    const currentUsers = sortUsers.slice(indexOfFirstUsers, indexOfLastUsers);
    const { nameBronzeBtn } = state;

    const showPercentage = () => {
        if (nameBronzeBtn === 'Basic' || nameBronzeBtn === 'Bronze') {
            return '8';
        }

        if (nameBronzeBtn === 'Silver') {
            return '9';
        }

        if (nameBronzeBtn === 'Gold') {
            return '10';
        }
    };

    const getMedal = () => {
        if (nameBronzeBtn === 'Bronze') {
            return bronze;
        }
        if (nameBronzeBtn === 'Silver') {
            return silver;
        }
        if (nameBronzeBtn === 'Gold') {
            return gold;
        }

        return medal;
    };

    return (
        <div className="referrals-page">
            <section className="cashbacks-page">
                <div className="cashbacks-page__wrapper">
                    <div className="cashbacks-page__inner">
                        <div className="cashbacks-page__box-1">
                            <div className="cashbacks-page__title-inner">
                                <h3 className="cashbacks-page__box-title">Your cashbacks</h3>
                            </div>
                            <img
                                src={total}
                                alt="Total"
                                className="cashbacks-page__box-img-total"
                            />
                            <p className="cashbacks-page__box-text">Income this month</p>
                            <img src={sum} alt="" className="cashbacks-page__box-img" />
                        </div>
                        <div className="cashbacks-page__box-2">
                            <div className="cashbacks-page__title-inner">
                                <h3 className="cashbacks-page__box-2-title">Benefits</h3>
                            </div>
                            <div>
                                <div className="cashbacks-page__box-2-inner">
                                    <div className="cashbacks-page__img-inner">
                                        {nameBronzeBtn === 'Basic' ? (
                                            <img
                                                src={medal}
                                                alt="bronze"
                                                className="cashbacks-page__medal-img"
                                            />
                                        ) : (
                                            <img
                                                src={getMedal()}
                                                alt="bronze"
                                                className="cashbacks-page__box-2-img"
                                            />
                                        )}
                                    </div>

                                    <div className="cashbacks-page__box-2-wrap">
                                        <p className="cashbacks-page__box-2-text">
                    Your current plan
                                        </p>
                                        <div className="cashbacks-page__box-2-pers">
                                            {nameBronzeBtn}
                                        </div>
                                    </div>
                                </div>
                                <div className="cashbacks-page__box-2-inner">
                                    <img
                                        src={perc}
                                        alt="percent"
                                        className="cashbacks-page__box-2-img"
                                    />
                                    <div className="cashbacks-page__box-2-wrap">
                                        <p className="cashbacks-page__box-2-text">Your cashback</p>
                                        <div className="cashbacks-page__box-2-pers">
                                            {`${showPercentage()}%`}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link
                                to="/pioneer_memberships"
                                type="button"
                                className="cashbacks-page__box-2-btn"
                            >
              Upgrade plan
                            </Link>
                        </div>
                    </div>
                    <div className="cashbacks-page__inner-2-scroll">
                        <div className="cashbacks-page__inner-2">
                            <div className="global-earnings-main__select-block">
                                <h3 className="global-earnings-main__select-title">
                Cashbacks by date
                                </h3>
                                <select className="global-earnings-main__select" name="" id="">
                                    <option value="">View by this year</option>
                                </select>
                            </div>
                            <CashbacksChart />
                        </div>
                    </div>
                </div>
                <div className="cashbacks-page__box-share">
                    <div className="cashbacks-page__span-title">Share by</div>
                    <div className="cashbacks-page__block-socials">
                        {currentUsers.map((icon) => (
                            <img
                                className="cashbacks-page__socials-img"
                                key={icon}
                                src={icon}
                                alt={icon}
                            />
                        ))}
                    </div>
                    <Link
                        to="/referrals"
                        className="cashbacks-page__btn-socials"
                        onClick={()=>{
                            setSubPage("shareCashbacks");
                        }}
                    >
          +20 other
                    </Link>
                </div>
            </section>
            <CashbackHistory />
        </div>
    );
};
export default CashbacksInformation;
