import React, { FC } from 'react';
import  BlockCalculator  from '../../views/referrals/BlockCalculator';
import BlockCode from '../../views/referrals/BlockCode';
import BlockInviteUsers from '../../views/referrals/BlockInviteUsers';
import BlockLeaderboard from '../../views/referrals/BlockLeaderboard';
import BlockQRCode from '../../views/referrals/BlockQRCode';


const ReferralsPage: FC = () => {
    return (
        <div className="referrals-page">
            <section className="referrals-page__header">
                <div className="referrals-page__inner">
                    <BlockCalculator />
                    <BlockCode />
                </div>
                <BlockLeaderboard />
            </section>
            <BlockQRCode />
            <BlockInviteUsers />
        </div>
    );
};

export default ReferralsPage;
