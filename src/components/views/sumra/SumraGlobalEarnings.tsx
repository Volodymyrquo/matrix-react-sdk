import React from 'react'
import GlobalEarnings from 'global-earnings'
import Rewards from 'component-rewards'
const SumraGlobalEarnings = () => {
    return (
        <div className="sumra-referrals-main">
            <GlobalEarnings Rewards={Rewards} />
        </div>
    )
}

export default SumraGlobalEarnings
