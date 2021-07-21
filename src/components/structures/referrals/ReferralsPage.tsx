import React, { FC } from 'react';
import  BlockCalculator  from '../../views/referrals/BlockCalculator';
import BlockCode from '../../views/referrals/BlockCode';
import BlockLeaderboard from '../../views/referrals/BlockLeaderboard';


const ReferralsPage: FC = () => {
    return (
        <div className="sumra-referrals-page">
            <section className="sumra-referrals-page__header">
                <div className="sumra-referrals-page__inner">
                    <BlockCalculator />
                    <BlockCode />
                </div>
                <BlockLeaderboard />
            </section>
        </div>
    );
};

export default ReferralsPage;
