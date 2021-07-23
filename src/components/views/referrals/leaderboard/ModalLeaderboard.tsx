import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal, { IProps } from '../../contactBook/modal';
import Close from '../../../../../res/images/wallets/close.png';
import classNames from 'classnames';

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

import frame2 from '../../../../../res/images/contactBook/frame2.svg';
import frame6 from '../../../../../res/images/contactBook/frame6.svg';
import mark from '../../../../../res/images/contactBook/mark.svg';

const icons = [
  {
    messenger: [
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
    ],
  },
  {
    social: [
      facebook,
      frame2,
      frame6,
      instagram,
      linkedin,
      twitter,
      pinterest,
      discord,
      youtube,
      zoom,
      tiktok,
      twinch,
    ],
  },
];

const ModalLeaderboard: FC<IProps> = ({ onClick }) => {
    // eslint-disable-next-line no-unused-vars
    const [visible, setVisible] = useState(false);
    const params = new URLSearchParams(location.search);
    const history = useHistory();

    return params.get('share-leaderboard') ? (
        <Modal onClick={onClick}>
            <section className="cashbacks-modal">
                <div className="cashbacks-modal__inner">
                    <div className="cashbacks-modal__block-header">
                        <h2 className="cashbacks-modal__title">Share your Cashbacks</h2>
                        <img
                            className="cashbacks-modal__img-close"
                            src={Close}
                            alt="Close modal"
                            onClick={() => {
                                history.push(location.pathname);
                            }}
                        />
                    </div>
                    <h3 className="cashbacks-modal__subtitle">
                        {`Click to select a `}
                        <strong className="cashbacks-modal__bolt-subtitle">
              Comunication platform
                        </strong>
                        {` below`}
                    </h3>
                    <div className="cashbacks-modal__block-messenger">
                        <h3 className="cashbacks-modal__messenger-subtitle">
                            {`Share by `}
                            <strong className="cashbacks-modal__bolt-subtitle">
                Messenger
                            </strong>
                            <div className="cashbacks-modal__block-icon">
                                {icons[0].messenger.map((icon) => (
                                    <div key={icon}>
                                        <input
                                            key={icon}
                                            className="cashbacks-modal__input-checkbox"
                                            id={icon}
                                            type="checkbox"
                                        />
                                        <label
                                            className="cashbacks-modal__td-checkbox"
                                            htmlFor={icon}
                                        >
                                            <img
                                                className="cashbacks-modal__img-icon"
                                                src={icon}
                                                alt=""
                                            />
                                            <img
                                                className={classNames('cashbacks-modal__img-mark', {
                          'cashbacks-modal__img-mark-visible': visible,
                                                })}
                                                src={mark}
                                                alt=""
                                            />
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </h3>
                    </div>
                    <div className="cashbacks-modal__subtitle">or</div>
                    <div className="cashbacks-modal__block-messenger">
                        <h3 className="cashbacks-modal__messenger-subtitle">
                            {`Share by `}
                            <strong className="cashbacks-modal__bolt-subtitle">
                Social media
                            </strong>
                        </h3>
                        <div className="cashbacks-modal__block-icon">
                            {icons[1].social.map((icon) => (
                                <div key={icon}>
                                    <input
                                        key={icon}
                                        className="cashbacks-modal__input-checkbox"
                                        id={icon}
                                        type="checkbox"
                                    />
                                    <label
                                        className="cashbacks-modal__td-checkbox"
                                        htmlFor={icon}
                                    >
                                        <img
                                            className="cashbacks-modal__img-icon"
                                            src={icon}
                                            alt=""
                                        />
                                        <img
                                            className={classNames('cashbacks-modal__img-mark', {
                        'cashbacks-modal__img-mark-visible': visible,
                                            })}
                                            src={mark}
                                            alt=""
                                        />
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="cashbacks-modal__block-button">
                        <button
                            onClick={() => {
                                history.push(location.pathname);
                            }}
                            className="cashbacks-modal__button"
                            type="button"
                        >
              Continue
                        </button>
                    </div>
                </div>
            </section>
        </Modal>
    ) : null;
};

export default ModalLeaderboard;
