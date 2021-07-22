import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LeaderboardTable from "../../../views/referrals/leaderboard/LeaderboardTable";

const Leaderboard = () => {
    return (
        <ReactCSSTransitionGroup
            transitionName="anim"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
        >
            <div className="page-content">
                <LeaderboardTable />
            </div>
        </ReactCSSTransitionGroup>

    );
};

export default Leaderboard;
