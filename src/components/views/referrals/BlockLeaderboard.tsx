import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../../../res/images/users/arrow.svg';
import monay from '../../../../res/images/users/monay.svg';
import st from '../../../../res/images/users/1st.svg';
import nd from '../../../../res/images/users/nd.svg';
import rd from '../../../../res/images/users/rd.svg';
import th from '../../../../res/images/users/th.svg';

const BlockLeaderboard: FC = () => {
    return (
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
                    <tr>
                        <th scope="row">
              5 <sup className="global-earnings-main__sup">th</sup>
                        </th>
                        <td className="global-earnings-main__img-td">
                            <img src={th} className="global-earnings-main__box-3-img" />
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
              6 <sup className="global-earnings-main__sup">th</sup>
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
                    <tr>
                        <th scope="row">
              7 <sup className="global-earnings-main__sup">th</sup>
                        </th>
                        <td className="global-earnings-main__img-td">
                            <img src={th} className="global-earnings-main__box-3-img" />
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
              8 <sup className="global-earnings-main__sup">th</sup>
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
                    <tr>
                        <th scope="row">
              9 <sup className="global-earnings-main__sup">th</sup>
                        </th>
                        <td className="global-earnings-main__img-td">
                            <img src={th} className="global-earnings-main__box-3-img" />
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
                    <tr className="global-earnings-main__bolt global-earnings-main__table-tr">
                        <th scope="row">
              10 <sup className="global-earnings-main__sup">th</sup>
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
    );
};
export default BlockLeaderboard;