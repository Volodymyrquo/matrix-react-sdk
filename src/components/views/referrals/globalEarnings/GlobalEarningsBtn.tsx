import React, { FC, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../../../../contexts/Routes/context";
import iconRewardsGrey from "../../../../../res/images/sumra/icon-rewards-grey.svg";
import iconStatisticsGrey from "../../../../../res/images/sumra/icon-statistics-grey.svg";
import iconReferralsGrey from "../../../../../res/images/sumra/icon-referrals-grey.svg";

const GlobalEarningsBtn: FC = () => {
    let pathname = window.location.pathname;
    const { setTable } = useContext(Context);
    useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
        pathname = window.location.pathname;
    }, [window.location.pathname]);

    return (
        <div className="page-content__wrap">
            <section className="page-content__global-earnings global-earnings">
                <Link
                    to="/referrals"
                    className='global-earnings__btn'
                    onClick={()=>{
                        setTable("referralsProgram");
                    }}
                >
                    <img src={iconReferralsGrey} alt="referrals" className="icon-referrals global-earnings__icon" />
          Referrals program
                </Link>
                <Link
                    to="/referrals"
                    className={`${
                        pathname.match('/global_earnings/rewards_program')
                            ? 'link-active'
                            : 'global-earnings__btn'
                    }`}
                    onClick={()=>{
                        setTable("rewardsProgram");
                    }}


                >
                    <img src={iconRewardsGrey} alt="referrals" className="icon-referrals global-earnings__icon" />
          Rewards program
                </Link>
                <Link
                    to="/referrals"
                    className={`${
                        pathname.match('/global_earnings/statistic')
                            ? 'link-active'
                            : 'global-earnings__btn'
                    }`}
                    onClick={()=>{
                        setTable("statisticsTable");
                    }}

                >
                    <img src={iconStatisticsGrey} alt="referrals" className="icon-referrals global-earnings__icon" />
          Statistic
                </Link>
            </section>
        </div>
    );
};

export default GlobalEarningsBtn;
