import React, { FC, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import persCode from '../../../../res/images/referrals/persCode.svg';
import link from '../../../../res/images/referrals/link.svg';
import generate from '../../../../res/images/referrals/generate.svg';
import codeBtn from '../../../../res/images/referrals/codeBtn.svg';

import sumrachat from '../../../../res/images/contactBook/sumrachat.svg';
import sumrameet from '../../../../res/images/contactBook/sumrameet.svg';
import telegram from '../../../../res/images/contactBook/telegram.svg';
import whatsapp from '../../../../res/images/contactBook/whatsapp.svg';
import messanger from '../../../../res/images/contactBook/messanger.svg';
import viber from '../../../../res/images/contactBook/viber.svg';
import signal from '../../../../res/images/contactBook/signal.svg';
import snapchat from '../../../../res/images/contactBook/snapchat.svg';
import meet from '../../../../res/images/contactBook/meet.svg';
import skype from '../../../../res/images/contactBook/skype.svg';
import line from '../../../../res/images/contactBook/line.svg';
import groupMe from '../../../../res/images/contactBook/group-me.svg';
import facebook from '../../../../res/images/contactBook/facebook.svg';
import instagram from '../../../../res/images/contactBook/instagram.svg';
import linkedin from '../../../../res/images/contactBook/in.svg';
import twitter from '../../../../res/images/contactBook/twitter.svg';
import pinterest from '../../../../res/images/contactBook/pinterest.svg';
import discord from '../../../../res/images/contactBook/discord.svg';
import youtube from '../../../../res/images/contactBook/youtube.svg';
import zoom from '../../../../res/images/contactBook/zoom.svg';
import tiktok from '../../../../res/images/contactBook/tiktok.svg';
import twinch from '../../../../res/images/contactBook/twinch.svg';
import frame1 from '../../../../res/images/contactBook/frame1.svg';
import frame2 from '../../../../res/images/contactBook/frame2.svg';
import frame6 from '../../../../res/images/contactBook/frame6.svg';
import frame3 from '../../../../res/images/contactBook/frame3.svg';

const icons = [
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
  frame6,
  frame3,
];

const BlockCode: FC = () => {
    // eslint-disable-next-line no-unused-vars
    const [copy, setCopy] = useState(false);
    const [visibleSmsCode, setVisibleSmsCode] = useState(false);
    const [visibleSmsLink, setVisibleSmsLink] = useState(false);

    const isCopy = ({ currentTarget: { name } }) => {
        if (name === 'code') {
            setVisibleSmsCode(true);
            setTimeout(() => {
                setVisibleSmsCode(false);
            }, 2000);
        }

        if (name === 'link') {
            setVisibleSmsLink(true);
            setTimeout(() => {
                setVisibleSmsLink(false);
            }, 2000);
        }
    };

    return (
        <div className="sumra-referrals-page__code-block sumra-code-block">
            <h3 className="sumra-code-block__title">{`Your referral link & code`}</h3>
            <div className="sumra-code-block__form-code">
                <div className="sumra-code-block__label">
                    <span className="sumra-code-block__span-title">Referral code</span>
                    <CopyToClipboard text="LZCXYZ777" onCopy={() => setCopy(true)}>
                        <div className="sumra-code-block__create-code">
                            {visibleSmsCode && (
                                <div className="sumra-code-block__copy-text">
                  Сopied to the clipboard
                                </div>
                            )}
                            <img src={persCode} alt="" />
              LZCXYZ777
                            <button
                                name="code"
                                //@ts-ignore
                                onClick={isCopy}
                                className="sumra-code-block__btn-code"
                                id="code"
                                type="button"
                            >
                                <img src={codeBtn} alt="" />
                            </button>
                        </div>
                    </CopyToClipboard>
                    <button className="sumra-code-block__btn-generate">
                        <img src={generate} alt="" />
            Generate new code
                    </button>
                </div>
                <div className="sumra-code-block__label">
                    <span className="sumra-code-block__span-title">Referral link</span>
                    <div className="sumra-code-block__create-link-text-inner">
                        <div className="sumra-code-block__create-link">
                            {visibleSmsLink && (
                                <div className="sumra-code-block__copy-text">
                  Сopied to the clipboard
                                </div>
                            )}
                            <img src={link} alt="" />
                            <div className="sumra-code-block__create-link-text">
                www.sumrawallet.com/?referral-code=LZCXYZ777
                            </div>
                            <CopyToClipboard
                                text="www.sumrawallet.com/?referral-code=LZCXYZ777"
                                onCopy={() => setCopy(true)}
                            >
                                <button
                                    name="link"
                                    //@ts-ignore
                                    onClick={isCopy}
                                    className="sumra-code-block__btn-code-link"
                                    type="button"
                                >
                                    <img src={codeBtn} alt="" />
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="sumra-code-block__block-social">
                        <div className="sumra-code-block__social-title">Share on/via</div>
                        <div className="sumra-code-block__inner-social">
                            <ul className="sumra-code-block__list-social">
                                {icons.map((icon, index) => (
                                    <li className="sumra-code-block__item-social" key={index}>
                                        <img
                                            className="sumra-code-block__item-social"
                                            src={icon}
                                            alt=""
                                        />{' '}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BlockCode;