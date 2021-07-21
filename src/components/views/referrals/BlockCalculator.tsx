import React, { FC, useEffect, useState, useContext } from 'react';
import { ReferralsContext } from "../../../contexts/Referrals/contextReferrals";
import people from '../../../../res/images/users/people.svg';
import pers from '../../../../res/images/users/pers.svg';
import coins from '../../../../res/images/users/coins.svg';
import gold from '../../../../res/images/memberships/gold.svg';
import silver from '../../../../res/images/memberships/silver.svg';
import bronze from '../../../../res/images/memberships/bronze.svg';
import medal from '../../../../res/images/memberships/Medal.svg';
import { Link } from 'react-router-dom';
import { IoCalculatorOutline } from 'react-icons/io5';

const BlockCalculator: FC = () => {
    const { state } = useContext(ReferralsContext);
    const [result, setResult] = useState(100000);
    const [invitedUsers, setInvitedUsers] = useState(10000);
    const [bonus, setBonus] = useState('$ 5');

    const { nameBronzeBtn } = state;

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
    };

    return (
        <div className="referrals-page__referrals-block-calculator referrals-block-calculator">
            <div className="referrals-block-calculator__box-4-inner">
                <div className="referrals-block-calculator__img-inner">
                    {nameBronzeBtn === 'Basic' ? (
                        <img
                            src={medal}
                            alt="Medal bronze"
                            className="referrals-block-calculator__img-medal-star"
                        />
                    ) : (
                        <img
                            src={getMedal()}
                            alt="Medal bronze"
                            className="referrals-block-calculator__img-medal"
                        />
                    )}

                    <p className="referrals-block-calculator__text-level">Your Referral level</p>
                    <h3 className="referrals-block-calculator__level-title">{nameBronzeBtn}</h3>
                    <Link
                        to="/pioneer_memberships"
                        className="referrals-block-calculator__level-btn"
                    >
                        <span>Upgrade</span>
                        <span className="arrow-hover">
                            <span className="hover-arrow"></span>
                        </span>
                    </Link>
                </div>
            </div>

            <div className="referrals-block-calculator__box-5">
                <h3 className="referrals-block-calculator__title-1">Your Earnings</h3>
                <div className="referrals-block-calculator__box-5-form">
                    <label className="referrals-block-calculator__box-5-calculate-label" htmlFor="">
                        <span>Invited users</span>
                        <input
                            className="referrals-block-calculator__box-5-calculate-users"
                            name="users"
                            onChange={calculate}
                            value={invitedUsers}
                            type="number"
                        />

                        <img
                            className="referrals-block-calculator__box-5-calculate-img-user"
                            src={people}
                            alt=""
                        />
                    </label>
                    <span>x</span>
                    <label className="referrals-block-calculator__box-5-calculate-label" htmlFor="">
                        <span>Bonus per user</span>
                        <select
                            className="referrals-block-calculator__box-5-calculate-bonus"
                            name="bonus"
                            onChange={calculate}
                            value={bonus}
                        >
                            <option value="$5">$ 8</option>
                            <option value="$10">$ 9</option>
                            <option value="$15">$ 10</option>
                        </select>
                        <img
                            className="referrals-block-calculator__box-5-calculate-img"
                            src={pers}
                            alt=""
                        />
                    </label>
                    <span>=</span>
                    <label className="referrals-block-calculator__box-5-calculate-label" htmlFor="">
                        <span>Total earnings</span>
                        <div className="referrals-block-calculator__box-5-calculate-result">
                            {`$ ${result}`}
                        </div>
                    </label>
                </div>
                <button className="referrals-block-calculator__box-5-calculate-btn" type="button">
                    <IoCalculatorOutline className="referrals-block-calculator__calculate-btn-icon" />
          Calculate projected earnings
                </button>
                <img className="referrals-block-calculator__img-box-5" src={coins} alt="coins" />
            </div>
        </div>
    );
};
export default BlockCalculator;
