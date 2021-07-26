import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GlobalEarningsBtn: FC = () => {
    let pathname = window.location.pathname;

    useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
        pathname = window.location.pathname;
    }, [window.location.pathname]);

    return (
        <div className="page-content__wrap">
            <section className="page-content__global-earnings global-earnings">
                <Link
                    to="#"
                    className='global-earnings__btn'

                >
                    <i className="icon-referrals global-earnings__icon"></i>
          Referrals program
                </Link>
                <Link
                    to="#"
                    className={`${
                        pathname.match('/global_earnings/rewards_program')
                            ? 'link-active'
                            : 'global-earnings__btn'
                    }`}
                >
                    <i className="icon-rewards"></i>
          Rewards program
                </Link>
                <Link
                    to="#"
                    className={`${
                        pathname.match('/global_earnings/statistic')
                            ? 'link-active'
                            : 'global-earnings__btn'
                    }`}
                >
                    <i className="icon-statistics"></i>
          Statistic
                </Link>
            </section>
        </div>
    );
};

export default GlobalEarningsBtn;
