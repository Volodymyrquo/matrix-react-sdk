/* eslint-disable no-unused-vars */
import React, { FC, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../../../../contexts/Routes/context";
import LeaderboardChart from './LeaderboardChart';

import cup from '../../../../../res/images/leaderboard/cup.svg';
import round from '../../../../../res/images/leaderboard/round.svg';
import arrow from '../../../../../res/images/leaderboard/arrow.svg';
import dolar from '../../../../../res/images/leaderboard/dolar.svg';

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

const LoaderInformation: FC = () => {
    // eslint-disable-next-line no-unused-vars
    const [currentPage, setCurrentPage] = useState(1);
    const [showUsers, setShowUsers] = useState(5);
    const [sortUsers, setSortUsers] = useState(icons);
    const indexOfLastUsers = currentPage * showUsers;
    const indexOfFirstUsers = indexOfLastUsers - showUsers;
    const currentUsers = sortUsers.slice(indexOfFirstUsers, indexOfLastUsers);

    const addPeople = () => {
        if (showUsers !== sortUsers.length && sortUsers.length - showUsers >= 5) {
            setShowUsers(showUsers + 25);
        } else {
            setShowUsers(sortUsers.length - showUsers + showUsers);
        }
    };
    const { setSubPage } = useContext(Context);
    return (
        <div className="leaderboard-page__block-information">
            <div className="leaderboard-page__blok-rank">
                <img src={cup} alt="photo cup" />
                <div className="leaderboard-page__blok-rank-information">
                    <h3 className="leaderboard-page__blok-rank-title">Your rank</h3>
                    <div className="leaderboard-page__inner">
                        <div className="leaderboard-page__place">
                            <img className="leaderboard-page__place-img" src={round} alt="" />
                            <span className="leaderboard-page__number">
                12 <sup className="leaderboard-page__sup">th</sup>
                            </span>
                        </div>
                        <div className="leaderboard-page__block-month">
                            <div className="leaderboard-page__month-title">This month</div>
                            <div className="leaderboard-page__month-number">
                                <img src={arrow} alt="img arrow" /> +10
                            </div>
                        </div>
                        <div className="leaderboard-page__block-month">
                            <div className="leaderboard-page__month-title">Your earnings</div>
                            <div className="leaderboard-page__earnings-number">
                                <img
                                    className="leaderboard-page__earnings-img"
                                    src={dolar}
                                    alt="img arrow"
                                />
                $2,135.50
                            </div>
                        </div>
                    </div>
                </div>
                <div className="leaderboard-page__box-share">
                    <div className="leaderboard-page__span-title">Share by</div>
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
                        className="leaderboard-page__btn-socials"
                        onClick={()=>{
                            setSubPage("shareCashbacksLeaderboard")
                        }}
                    >
            +24
                    </Link>
                </div>
            </div>

            <div className="leaderboard-page__inner-2-scroll">
                <div className="leaderboard-page__inner-2">
                    <div className="leaderboard-page__select-block">
                        <h3 className="global-earnings-main__select-title">
              Your activity
                        </h3>
                        <select className="global-earnings-main__select" name="" id="">
                            <option value="">This year</option>
                        </select>
                    </div>
                    <div className="leaderboard-page__scroll">
                        <div style={{ width: '800px', margin: '0 auto' }}>
                            <LeaderboardChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoaderInformation;
