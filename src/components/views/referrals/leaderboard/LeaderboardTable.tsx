/* eslint-disable no-unused-vars */
import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { people } from '../../../../../res/helpers/people';
import gold from '../../../../../res/images/leaderboard/gold.svg';
import silver from '../../../../../res/images/leaderboard/silver.svg';
import bronze from '../../../../../res/images/leaderboard/bronze.svg';
import star from '../../../../../res/images/leaderboard/star.svg';
import user from '../../../../../res/images/leaderboard/user.svg';
import users from '../../../../../res/images/leaderboard/users.svg';
import dolar from '../../../../../res/images/leaderboard/dolar.svg';
import LoaderInformation from './LoaderInformation';

const LeaderboardTable: FC = () => {
    // eslint-disable-next-line no-unused-vars
    const [currentPage, setCurrentPage] = useState(1);
    const [showUsers, setShowUsers] = useState(10);
    const [sortPeople, setSortCashback] = useState(
        [...people].sort((a, b) => {
            return +b.earnings - +a.earnings;
        }),
    );
    const [allTime, setAllTime] = useState(true);
    const [week, setWeek] = useState(false);
    const [monht, setMonht] = useState(false);
    const [year, setYear] = useState(false);
    const indexOfLastUsers = currentPage * showUsers;
    const indexOfFirstUsers = indexOfLastUsers - showUsers;
    const currentUsers = sortPeople.slice(indexOfFirstUsers, indexOfLastUsers);

    const addPeople = () => {
        setShowUsers(sortPeople.length - showUsers + showUsers);
    };

    const isImg = (index) => {
        if (index + 1 === 1) {
            return gold;
        }

        if (index + 1 === 2) {
            return silver;
        }

        if (index + 1 === 3) {
            return bronze;
        }

        if (index + 1 > 3 && index + 1 < 11) {
            return star;
        }
    };

    const returnSub = (index) => {
        if (index + 1 === 1) {
            return 'st';
        } else if (index + 1 === 2) {
            return 'nd';
        } else if (index + 1 === 3) {
            return 'rd';
        } else {
            return 'th';
        }
    };

    return (
        <section className="leaderboard-page">
            <div className="leaderboard-page__block-table">
                <div className="leaderboard-page__block-btn-scroll">
                    <div className="leaderboard-page__block-btn">
                        <button
                            className={classNames('leaderboard-page__btn', {
                'leaderboard-page__btn-active': allTime,
                            })}
                            onClick={() => {
                                setAllTime(true);
                                setWeek(false);
                                setMonht(false);
                                setYear(false);
                            }}
                        >
              All time
                        </button>
                        <button
                            className={classNames('leaderboard-page__btn', {
                'leaderboard-page__btn-active': week,
                            })}
                            onClick={() => {
                                setAllTime(false);
                                setWeek(true);
                                setMonht(false);
                                setYear(false);
                            }}
                        >
              This week
                        </button>
                        <button
                            className={classNames('leaderboard-page__btn', {
                'leaderboard-page__btn-active': monht,
                            })}
                            onClick={() => {
                                setAllTime(false);
                                setWeek(false);
                                setMonht(true);
                                setYear(false);
                            }}
                        >
              This month
                        </button>
                        <button
                            className={classNames('leaderboard-page__btn', {
                'leaderboard-page__btn-active': year,
                            })}
                            onClick={() => {
                                setAllTime(false);
                                setWeek(false);
                                setMonht(false);
                                setYear(true);
                            }}
                        >
              This year
                        </button>
                    </div>
                </div>
                <div className="leaderboard-page__block-table-fixed">
                    <table className="leaderboard-page__block-table-fixed">
                        <thead>
                            <tr className="leaderboard-page__table">
                                <th className="leaderboard-page__th">Rank</th>
                                <th className="leaderboard-page__th">Username</th>
                                <th className="leaderboard-page__th">Invited users</th>
                                <th className="leaderboard-page__th">Total earnings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUsers.map((user, index) => (
                                <tr key={index}>
                                    <td className="leaderboard-page__td leaderboard-page__td-width">
                                        {index + 1}
                                        <sup className="leaderboard-page__sup">
                                            {returnSub(index)}
                                        </sup>
                                        <img
                                            className="leaderboard-page__td-img"
                                            src={isImg(index)}
                                            alt=""
                                        />
                                    </td>
                                    <td className="leaderboard-page__td">
                                        <img
                                            className="leaderboard-page__td-img-dolar"
                                            src={user.img}
                                            alt=""
                                        />
                                        {user.name}
                                    </td>
                                    <td className="leaderboard-page__td leaderboard-page__td-color">
                                        <img
                                            className="leaderboard-page__th-user-icon"
                                            src={users}
                                            alt=""
                                        />
                                        {user.invited}
                                    </td>
                                    <td className="leaderboard-page__td">
                                        {' '}
                                        <img
                                            className="leaderboard-page__td-img-dolar"
                                            src={user.dolar}
                                            alt=""
                                        />
                                        {`$ ${user.earnings.toLocaleString('en-US')}`}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <thead>
                            <tr className="leaderboard-page__user">
                                <th className="leaderboard-page__th-user leaderboard-page__th-last">
                  12 <sup className="leaderboard-page__sup">th</sup>
                                </th>
                                <th className="leaderboard-page__th-user">
                                    <img
                                        className="leaderboard-page__img-user"
                                        src={user}
                                        alt=""
                                    />
                                    <span className="leaderboard-page__img-user-text">
                    Harriet Andersson
                                    </span>
                                </th>
                                <th className="leaderboard-page__th-user">
                                    {' '}
                                    <img
                                        className="leaderboard-page__th-user-icon"
                                        src={users}
                                        alt=""
                                    />{' '}
                  2,575
                                </th>
                                <th className="leaderboard-page__th-user">
                                    {' '}
                                    <img
                                        className="leaderboard-page__th-user-img-dolar"
                                        src={dolar}
                                        alt=""
                                    />
                  $2,135.50
                                </th>
                            </tr>
                        </thead>
                        <thead>
                            <tr className="leaderboard-page__table">
                                <th className="leaderboard-page__th leaderboard-page__th-last">
                                    <span className="leaderboard-page__text">
                                        {`Showing ${currentUsers.length + 1} of ${
                                            people.length + 1
                                        } operation`}
                                        <span
                                            onClick={addPeople}
                                            className="leaderboard-page__arrow"
                                        >
                      View more
                                        </span>
                                    </span>
                                </th>
                                <th className="leaderboard-page__th"></th>
                                <th className="leaderboard-page__th"></th>
                                <th className="leaderboard-page__th"></th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div className="leaderboard-page__width-share">

                <LoaderInformation />
            </div>
        </section>
    );
};
export default LeaderboardTable;
