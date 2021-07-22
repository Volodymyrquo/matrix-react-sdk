import React, { useContext } from "react";
import SidebarReferrals from "./SidebarReferrals";
import { ReferralsProvider } from "../../../contexts/Referrals/contextReferrals";
import { Context } from "../../../contexts/Routes/context";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Referrals = () => {
    const { subpage } = useContext(Context);

    return (
        <div className="sumra-referrals-main" >

            <ReferralsProvider>
                <SidebarReferrals />
                <ReactCSSTransitionGroup
                    transitionName="anim"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnter={false}
                    transitionLeave={false}
                >

                    {subpage}
                </ReactCSSTransitionGroup>
            </ReferralsProvider>

        </div>
    );
};

export default Referrals;
