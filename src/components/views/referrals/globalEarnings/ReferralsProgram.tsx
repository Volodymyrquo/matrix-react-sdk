import React, { FC, useEffect, useState, useContext } from 'react';
import { ReferralsContext } from "../../../../contexts/Referrals/contextReferrals";
import money from '../../../../../res/images/users/money.svg';
import bronze from '../../../../../res/images/users/bronze.svg';
import silver from '../../../../../res/images/users/silver.svg';
import gold from '../../../../../res/images/users/gold.svg';
import st from '../../../../../res/images/users/1st.svg';
import monay from '../../../../../res/images/users/monay.svg';
import nd from '../../../../../res/images/users/nd.svg';
import rd from '../../../../../res/images/users/rd.svg';
import th from '../../../../../res/images/users/th.svg';
import arrow from '../../../../../res/images/users/arrow.svg';
import coins from '../../../../../res/images/users/coins.svg';
import upto from '../../../../../res/images/users/upto.svg';
import people from '../../../../../res/images/users/people.svg';
import pers from '../../../../../res/images/users/pers.svg';
/* import EarningsChart from '../../../../components/chartjs/earningsChart';
 */
import { Link } from 'react-router-dom';

const ReferralsProgram: FC = () => {
    const [result, setResult] = useState(100000);
    const [invitedUsers, setInvitedUsers] = useState(10000);
    const [bonus, setBonus] = useState('$ 5');
    const { state } = useContext(ReferralsContext);
    const calculate = ({ target: { value, name } }) => {
        if (name === 'users') {
            setInvitedUsers(value);
        } else {
            setBonus(value);
        }
    };

    useEffect(() => {
        setResult(invitedUsers * +bonus.slice(1).trim());
    }, [invitedUsers, bonus]);

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

    return (
        <section className="page-content__global-earnings global-earnings-main">
            <div className="global-earnings-main__inner-1">
                <div className="global-earnings-main__box-1">
                    <h3 className="global-earnings-main__title-1">Your earnings</h3>
                    <div className="global-earnings-main__inner">
                        <p className="global-earnings-main__total">Total earnings</p>
                        <div className="global-earnings-main__wrap">
                            <i className="icon-global"></i>
                            <span className="global-earnings-main__number-700">$4,000</span>
                        </div>
                    </div>
                    <div className="global-earnings-main__inner">
                        <p className="global-earnings-main__total">Membership plan</p>
                        <div className="global-earnings-main__wrap">
                            <i className="icon-pioneer"></i>
                            <span className="global-earnings-main__number">
                                {nameBronzeBtn}
                            </span>
                        </div>
                    </div>
                    <div className="global-earnings-main__inner">
                        <p className="global-earnings-main__total">
              Bonus per invited user
                        </p>
                        <div className="global-earnings-main__wrap">
                            <i className="icon-cashbacks"></i>
                            <span className="global-earnings-main__number">
                                {showPercentage()}
                            </span>
                        </div>
                    </div>
                    <div className="global-earnings-main__inner">
                        <p className="global-earnings-main__total">Invited users</p>
                        <div className="global-earnings-main__wrap">
                            <i className="icon-rewards"></i>
                            <span className="global-earnings-main__number">500</span>
                        </div>
                    </div>
                    <div className="global-earnings-main__inner">
                        <img src={money} alt="img money" />

                        <Link
                            to="/pioneer_memberships"
                            className="global-earnings-main__button"
                        >
              Upgrade plan
                        </Link>
                    </div>
                </div>
                <div className="global-earnings-main__scroll">
                    <div className="global-earnings-main__box-2">
                        <div className="global-earnings-main__select-block">
                            <h3 className="global-earnings-main__select-title">
                Earnings by date
                            </h3>
                            <select className="global-earnings-main__select" name="" id="">
                                <option value="">View by this year</option>
                            </select>
                        </div>
                        {/*  <EarningsChart /> */}
                    </div>
                </div>

                <div className="global-earnings-main__box-3">
                    <h3 className="global-earnings-main__box-3-title">Leaderboard</h3>
                    <table>
                        <thead className="global-earnings-main__thead">
                            <tr className="global-earnings-main__thead">
                                <th scope="row">
                  1 <sup className="global-earnings-main__sup">st</sup>
                                </th>
                                <td className="global-earnings-main__img-td">
                                    <img src={st} className="global-earnings-main__box-3-img" />
                                </td>
                                <td className="global-earnings-main__img-td">Jacob Jones</td>
                                <td className="global-earnings-main__img-td">
                                    <img
                                        className="global-earnings-main__img-coin"
                                        src={monay}
                                        alt=""
                                    />
                                    {`$252,750`}
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="global-earnings-main__bolt">
                                <th scope="row">
                  2 <sup className="global-earnings-main__sup">nd</sup>
                                </th>
                                <td className="global-earnings-main__img-td">
                                    <img src={nd} className="global-earnings-main__box-3-img" />
                                </td>
                                <td className="global-earnings-main__img-td">Floyd Miles</td>
                                <td className="global-earnings-main__img-td">
                                    <img
                                        className="global-earnings-main__img-coin"
                                        src={monay}
                                        alt=""
                                    />
                                    {`$210,505`}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                  3 <sup className="global-earnings-main__sup">rd</sup>
                                </th>
                                <td className="global-earnings-main__img-td">
                                    <img src={rd} className="global-earnings-main__box-3-img" />
                                </td>
                                <td className="global-earnings-main__img-td">Eleanor Pena</td>
                                <td className="global-earnings-main__img-td">
                                    <img
                                        className="global-earnings-main__img-coin"
                                        src={monay}
                                        alt=""
                                    />
                                    {`$150,750`}
                                </td>
                            </tr>
                            <tr className="global-earnings-main__bolt">
                                <th scope="row">
                  4 <sup className="global-earnings-main__sup">th</sup>
                                </th>
                                <td className="global-earnings-main__img-td">
                                    <img src={th} className="global-earnings-main__box-3-img" />
                                </td>
                                <td className="global-earnings-main__img-td">Arlene McCoy</td>
                                <td className="global-earnings-main__img-td">
                                    <img
                                        className="global-earnings-main__img-coin"
                                        src={monay}
                                        alt=""
                                    />
                                    {`$85,750`}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to="/leaderboard" className="global-earnings-main__box-3-link">
            Go to Leaderboard page
                        <img src={arrow} alt="arrow" />
                    </Link>
                </div>
            </div>
            <h3 className="global-earnings-main__title">Projected Earnings</h3>
            <div className="global-earnings-main__inner-2">
                <div className="global-earnings-main__box-4">
                    <div className="global-earnings-main__box-4-inner">
                        <button
                            className={
                                nameBronzeBtn === 'Basic'
                                    ? 'global-earnings-main__pioneer-btn-active'
                                    : 'global-earnings-main__pioneer-btn'
                            }
                        >
              Free plan
                        </button>
                        <button
                            className={
                                nameBronzeBtn === 'Bronze'
                                    ? 'global-earnings-main__pioneer-btn-active'
                                    : 'global-earnings-main__pioneer-btn'
                            }
                        >
                            <img
                                className="global-earnings-main__pioneer-img"
                                src={bronze}
                                alt="img bronze"
                            />
                            <span>Bronze plan</span>
                        </button>
                    </div>
                    <div className="global-earnings-main__box-4-inner">
                        <button
                            className={
                                nameBronzeBtn === 'Silver'
                                    ? 'global-earnings-main__pioneer-btn-active'
                                    : 'global-earnings-main__pioneer-btn'
                            }
                        >
                            <img
                                className="global-earnings-main__pioneer-img"
                                src={silver}
                                alt="img silver"
                            />
                            <span>Silver plan</span>
                        </button>
                        <button
                            className={
                                nameBronzeBtn === 'Gold'
                                    ? 'global-earnings-main__pioneer-btn-active'
                                    : 'global-earnings-main__pioneer-btn'
                            }
                        >
                            <img
                                className="global-earnings-main__pioneer-img"
                                src={gold}
                                alt="img gold"
                            />
                            <span>Gold plan</span>
                        </button>
                    </div>
                </div>
                <div className="global-earnings-main__box-5">
                    <h3 className="global-earnings-main__title-1">
            Calculate projected earnings
                    </h3>
                    <div className="global-earnings-main__box-5-form">
                        <label
                            className="global-earnings-main__box-5-calculate-label"
                            htmlFor=""
                        >
                            <span>Invited users</span>
                            <input
                                className="global-earnings-main__box-5-calculate-users"
                                name="users"
                                onChange={calculate}
                                value={invitedUsers}
                                type="number"
                            />

                            <img
                                className="global-earnings-main__box-5-calculate-img-user"
                                src={people}
                                alt=""
                            />
                        </label>
                        <span>x</span>
                        <label
                            className="global-earnings-main__box-5-calculate-label"
                            htmlFor=""
                        >
                            <span>Bonus per user</span>
                            <select
                                className="global-earnings-main__box-5-calculate-bonus"
                                name="bonus"
                                onChange={calculate}
                                value={bonus}
                            >
                                <option value="$5">$ 8</option>
                                <option value="$10">$ 9</option>
                                <option value="$15">$ 10</option>
                            </select>
                            <img
                                className="global-earnings-main__box-5-calculate-img"
                                src={pers}
                                alt=""
                            />
                        </label>
                        <span>=</span>
                        <label
                            className="global-earnings-main__box-5-calculate-label"
                            htmlFor=""
                        >
                            <span>Total earnings</span>
                            <div className="global-earnings-main__box-5-calculate-result">
                                {`$ ${result}`}
                            </div>
                        </label>
                    </div>
                    <Link
                        to={{
              pathname: '/global_earnings/referrals_program',
              search: '?payment-details=true',
                        }}
                        className="global-earnings-main__box-5-calculate-btn"
                        type="button"
                    >
            Upgrade to Gold plan
                    </Link>
                    <img
                        className="global-earnings-main__img-box-5"
                        src={coins}
                        alt="coins"
                    />
                </div>
                <div className="global-earnings-main__box-6">
                    <h3 className="global-earnings-main__box-3-title">
                        <span className="global-earnings-main__title-color">{`${nameBronzeBtn} plan `}</span>
            projected earnings
                    </h3>

                    <div className="global-earnings-main__box-6-inner">
                        <img src={upto} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReferralsProgram;