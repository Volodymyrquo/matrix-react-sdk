import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import arrow from '../../../../res/images/users/arrow.svg';
import monay from '../../../../res/images/users/monay.svg';
import st from '../../../../res/images/users/1st.svg';
import nd from '../../../../res/images/users/nd.svg';
import rd from '../../../../res/images/users/rd.svg';
import th from '../../../../res/images/users/th.svg';

const BlockLeaderboard: FC = () => {
    return (
        <div className="sumra-global-earnings-main__box-3">
            <h3 className="sumra-global-earnings-main__box-3-title">Leaderboard</h3>
            <Table striped>
                <thead className="sumra-global-earnings-main__thead">
                    <tr className="sumra-global-earnings-main__thead">
                        <th scope="row">
              1 <sup className="sumra-global-earnings-main__sup">st</sup>
                        </th>
                        <td className="sumra-global-earnings-main__img-td">
                            <img src={st} className="sumra-global-earnings-main__box-3-img" />
                        </td>
                        <td className="sumra-global-earnings-main__img-td">Jacob Jones</td>
                        <td className="sumra-global-earnings-main__img-td">
                            <img
                                className="sumra-global-earnings-main__img-coin"
                                src={monay}
                                alt=""
                            />
                            {`$252,750`}
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="sumra-global-earnings-main__bolt">
                        <th scope="row">
              2 <sup className="sumra-global-earnings-main__sup">nd</sup>
                        </th>
                        <td className="sumra-global-earnings-main__img-td">
                            <img src={nd} className="sumra-global-earnings-main__box-3-img" />
                        </td>
                        <td className="sumra-global-earnings-main__img-td">Floyd Miles</td>
                        <td className="sumra-global-earnings-main__img-td">
                            <img
                                className="sumra-global-earnings-main__img-coin"
                                src={monay}
                                alt=""
                            />
                            {`$210,505`}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
              3 <sup className="sumra-global-earnings-main__sup">rd</sup>
                        </th>
                        <td className="sumra-global-earnings-main__img-td">
                            <img src={rd} className="sumra-global-earnings-main__box-3-img" />
                        </td>
                        <td className="sumra-global-earnings-main__img-td">Eleanor Pena</td>
                        <td className="sumra-global-earnings-main__img-td">
                            <img
                                className="sumra-global-earnings-main__img-coin"
                                src={monay}
                                alt=""
                            />
                            {`$150,750`}
                        </td>
                    </tr>
                    <tr className="sumra-global-earnings-main__bolt">
                        <th scope="row">
              4 <sup className="sumra-global-earnings-main__sup">th</sup>
                        </th>
                        <td className="sumra-global-earnings-main__img-td">
                            <img src={th} className="sumra-global-earnings-main__box-3-img" />
                        </td>
                        <td className="sumra-global-earnings-main__img-td">Arlene McCoy</td>
                        <td className="sumra-global-earnings-main__img-td">
                            <img
                                className="sumra-global-earnings-main__img-coin"
                                src={monay}
                                alt=""
                            />
                            {`$85,750`}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
              5 <sup className="sumra-global-earnings-main__sup">th</sup>
                        </th>
                        <td className="sumra-global-earnings-main__img-td">
                            <img src={th} className="sumra-global-earnings-main__box-3-img" />
                        </td>
                        <td className="sumra-global-earnings-main__img-td">Eleanor Pena</td>
                        <td className="sumra-global-earnings-main__img-td">
                            <img
                                className="sumra-global-earnings-main__img-coin"
                                src={monay}
                                alt=""
                            />
                            {`$150,750`}
                        </td>
                    </tr>
                    <tr className="sumra-global-earnings-main__bolt">
                        <th scope="row">
              6 <sup className="sumra-global-earnings-main__sup">th</sup>
                        </th>
                        <td className="sumra-global-earnings-main__img-td">
                            <img src={th} className="sumra-global-earnings-main__box-3-img" />
                        </td>
                        <td className="sumra-global-earnings-main__img-td">Arlene McCoy</td>
                        <td className="sumra-global-earnings-main__img-td">
                            <img
                                className="sumra-global-earnings-main__img-coin"
                                src={monay}
                                alt=""
                            />
                            {`$85,750`}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
              7 <sup className="sumra-global-earnings-main__sup">th</sup>
                        </th>
                        <td className="sumra-global-earnings-main__img-td">
                            <img src={th} className="sumra-global-earnings-main__box-3-img" />
                        </td>
                        <td className="sumra-global-earnings-main__img-td">Eleanor Pena</td>
                        <td className="sumra-global-earnings-main__img-td">
                            <img
                                className="sumra-global-earnings-main__img-coin"
                                src={monay}
                                alt=""
                            />
                            {`$150,750`}
                        </td>
                    </tr>
                    <tr className="sumra-global-earnings-main__bolt">
                        <th scope="row">
              8 <sup className="sumra-global-earnings-main__sup">th</sup>
                        </th>
                        <td className="sumra-global-earnings-main__img-td">
                            <img src={th} className="sumra-global-earnings-main__box-3-img" />
                        </td>
                        <td className="sumra-global-earnings-main__img-td">Arlene McCoy</td>
                        <td className="sumra-global-earnings-main__img-td">
                            <img
                                className="sumra-global-earnings-main__img-coin"
                                src={monay}
                                alt=""
                            />
                            {`$85,750`}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
              9 <sup className="sumra-global-earnings-main__sup">th</sup>
                        </th>
                        <td className="sumra-global-earnings-main__img-td">
                            <img src={th} className="sumra-global-earnings-main__box-3-img" />
                        </td>
                        <td className="sumra-global-earnings-main__img-td">Eleanor Pena</td>
                        <td className="sumra-global-earnings-main__img-td">
                            <img
                                className="sumra-global-earnings-main__img-coin"
                                src={monay}
                                alt=""
                            />
                            {`$150,750`}
                        </td>
                    </tr>
                    <tr className="sumra-global-earnings-main__bolt">
                        <th scope="row">
              10 <sup className="sumra-global-earnings-main__sup">th</sup>
                        </th>
                        <td className="sumra-global-earnings-main__img-td">
                            <img src={th} className="sumra-global-earnings-main__box-3-img" />
                        </td>
                        <td className="sumra-global-earnings-main__img-td">Arlene McCoy</td>
                        <td className="sumra-global-earnings-main__img-td">
                            <img
                                className="sumra-global-earnings-main__img-coin"
                                src={monay}
                                alt=""
                            />
                            {`$85,750`}
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Link to="/leaderboard" className="sumra-global-earnings-main__box-3-link">
        Go to Leaderboard page
                <img src={arrow} alt="arrow" />
            </Link>
        </div>
    );
};

export default BlockLeaderboard;