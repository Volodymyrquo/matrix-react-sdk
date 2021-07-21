import React, { FC, useState } from 'react';
import QRCode from 'qrcode.react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import codeBtn from '../../../../res/images/referrals/copy.svg';
import users from '../../../../res/images/referrals/users.svg';
import userPlus from '../../../../res/images/referrals/userPlus.svg';
import edit from '../../../../res/images/referrals/edit.svg';
import people from '../../../../res/images/referrals/people.svg';
import usersPlu from '../../../../res/images/referrals/usersPlu.svg';

 const BlockQRCode: FC = () => {
    // eslint-disable-next-line no-unused-vars
    const [copy, setCopy] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    const isCopy = ({ currentTarget: { id } }) => {
        if (id === '1') {
            setVisible1(true);
            setTimeout(() => {
                setVisible1(false);
            }, 2000);
        }

        if (id === '2') {
            setVisible2(true);
            setTimeout(() => {
                setVisible2(false);
            }, 2000);
        }

        if (id === '3') {
            setVisible3(true);
            setTimeout(() => {
                setVisible3(false);
            }, 2000);
        }

        if (id === '4') {
            setVisible4(true);
            setTimeout(() => {
                setVisible4(false);
            }, 2000);
        }
    };

    return (
        <section className="block-QR-code">
            <div className="block-QR-code__inner-list">
                <div className="block-QR-code__inner-list-scrall">
                    <div className="block-QR-code__box-list">
                        <h3 className="block-QR-code__title">Your referral links list</h3>
                        <ul className="block-QR-code__list">
                            <li className="block-QR-code__item block-QR-code__item-first">
                                <div className="block-QR-code__referral-code">
                                    {visible1 && (
                                        <div className="block-QR-code__copy-text">
                      Сopied to the clipboard
                                        </div>
                                    )}
                                    <CopyToClipboard
                                        text="GZCXYZ787"
                                        onCopy={() => setCopy(true)}
                                    >
                                        <span
                                            //@ts-ignore
                                            onClick={isCopy}
                                            id="1"
                                            className="block-QR-code__referral-text"
                                        >
                      GZCXYZ787
                                            <img src={codeBtn} alt="" />
                                        </span>
                                    </CopyToClipboard>
                                </div>
                                <div className="block-QR-code__default">Default</div>
                                <div className="block-QR-code__invited">
                                    <img src={users} alt="" />
                  Invited users
                                    <span className="block-QR-code__invited-col">253</span>
                                </div>
                                <div className="block-QR-code__btn-ivite">
                                    <img
                                        className="block-QR-code__btn-ivite-img"
                                        src={userPlus}
                                        alt=""
                                    />
                  Invite
                                </div>
                                <div className="block-QR-code__btn-edit">
                                    <img
                                        className="block-QR-code__btn-edit-img"
                                        src={edit}
                                        alt=""
                                    />
                  Edit
                                </div>
                            </li>
                            <li className="block-QR-code__item">
                                <div className="block-QR-code__referral-code">
                                    {visible2 && (
                                        <div className="block-QR-code__copy-text">
                      Сopied to the clipboard
                                        </div>
                                    )}
                                    <CopyToClipboard
                                        text="ZPQ34833Z"
                                        onCopy={() => setCopy(true)}
                                    >
                                        <span
                                            //@ts-ignore
                                            onClick={isCopy}
                                            id="2"
                                            className="block-QR-code__referral-text"
                                        >
                      ZPQ34833Z
                                            <img src={codeBtn} alt="" />
                                        </span>
                                    </CopyToClipboard>
                                </div>
                                <div className="block-QR-code__default"></div>
                                <div className="block-QR-code__invited">
                                    <img src={users} alt="" />
                  Invited users
                                    <span className="block-QR-code__invited-col">101</span>
                                </div>
                                <div className="block-QR-code__btn-ivite">
                                    <img
                                        className="block-QR-code__btn-ivite-img"
                                        src={userPlus}
                                        alt=""
                                    />
                  Invite
                                </div>
                                <div className="block-QR-code__btn-edit">
                                    <img
                                        className="block-QR-code__btn-edit-img"
                                        src={edit}
                                        alt=""
                                    />
                  Edit
                                </div>
                            </li>
                            <li className="block-QR-code__item">
                                <div className="block-QR-code__referral-code">
                                    {visible3 && (
                                        <div className="block-QR-code__copy-text">
                      Сopied to the clipboard
                                        </div>
                                    )}
                                    <CopyToClipboard text="FVM29G6C" onCopy={() => setCopy(true)}>
                                        <span
                                            //@ts-ignore
                                            onClick={isCopy}
                                            id="3"
                                            className="block-QR-code__referral-text"
                                        >
                      FVM29G6C
                                            <img src={codeBtn} alt="" />
                                        </span>
                                    </CopyToClipboard>
                                </div>
                                <div className="block-QR-code__default"></div>
                                <div className="block-QR-code__invited">
                                    <img src={users} alt="" />
                  Invited users
                                    <span className="block-QR-code__invited-col">99</span>
                                </div>
                                <div className="block-QR-code__btn-ivite">
                                    <img
                                        className="block-QR-code__btn-ivite-img"
                                        src={userPlus}
                                        alt=""
                                    />
                  Invite
                                </div>
                                <div className="block-QR-code__btn-edit">
                                    <img
                                        className="block-QR-code__btn-edit-img"
                                        src={edit}
                                        alt=""
                                    />
                  Edit
                                </div>
                            </li>
                            <li className="block-QR-code__item block-QR-code__item-last">
                                <div className="block-QR-code__referral-code">
                                    {visible4 && (
                                        <div className="block-QR-code__copy-text">
                      Сopied to the clipboard
                                        </div>
                                    )}
                                    <CopyToClipboard
                                        text="GZCYYZ788"
                                        onCopy={() => setCopy(true)}
                                    >
                                        <span
                                            //@ts-ignore
                                            onClick={isCopy}
                                            id="4"
                                            className="block-QR-code__referral-text"
                                        >
                      GZCYYZ788
                                            <img src={codeBtn} alt="" />
                                        </span>
                                    </CopyToClipboard>
                                </div>
                                <div className="block-QR-code__default"></div>
                                <div className="block-QR-code__invited">
                                    <img src={users} alt="" />
                  Invited users
                                    <span className="block-QR-code__invited-col">47</span>
                                </div>
                                <div className="block-QR-code__btn-ivite">
                                    <img
                                        className="block-QR-code__btn-ivite-img"
                                        src={userPlus}
                                        alt=""
                                    />
                  Invite
                                </div>
                                <div className="block-QR-code__btn-edit">
                                    <img
                                        className="block-QR-code__btn-edit-img"
                                        src={edit}
                                        alt=""
                                    />
                  Edit
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="block-QR-code__box-QR">
                    <h3 className="block-QR-code__title">QR code</h3>
                    <div className="block-QR-code__qrcode">
                        <QRCode id="789" value="https://icons.getbootstrap.com/" />
                    </div>
                </div>
            </div>
            <div className="block-QR-code__box-unlimited">
                <div className="block-QR-code__wrapper-unlimited">
                    <div className="block-QR-code__unlimited-text">
            Get up to $250 <br />
            for Referrals. <br />
                        <span className="block-QR-code__unlimited-text-color">
              Earn Unlimited.
                        </span>
                    </div>
                    <img src={people} alt="" />
                </div>

                <button className="block-QR-code__unlimited-btn" type="button">
                    <img
                        className="block-QR-code__unlimited-btn-img"
                        src={usersPlu}
                        alt=""
                    />
          Invite a Friend
                </button>
            </div>
        </section>
    );
};
export default BlockQRCode;