import React, { FC, useState } from 'react';
import logo from '../../../../res/images/contactBook/logo.svg';
import NavigationSidebar from './NavigationSidebar';
import plus from '../../../../res/images/contactBook/plus.svg';

const SidebarReferrals: FC = () => {
    const [burger, setBurger] = useState(true);
    return (
        <section
            className={
                burger
                    ? 'sumra-referrals__sidebar-block'
                    : 'sumra-referrals__sidebar-block-visible'
            }
        >
            <div>

                <div
                    id="menu"
                    onClick={() => {
                        setBurger(!burger);
                    }}
                >
                    <div id="burger">
                        <input type="checkbox" />
                        <span id="span4"></span>
                        <span id="span5"></span>
                        <span id="span6"></span>
                    </div>
                </div>
            </div>

            <NavigationSidebar />

            <div className="sumra-referrals__more-wrapper">
                <p className="sumra-referrals__desc">
          Get up to $250 for Referrals.
                    <br />
          Earn Unlimited.
                </p>
                <a href="/referrals" className="sumra-referrals__more-btn">
          Learn more
                </a>
            </div>
        </section>
    );
};
export default SidebarReferrals;
