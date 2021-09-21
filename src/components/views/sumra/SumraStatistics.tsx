import React from 'react'
import Statistics from 'global-earnings'
import Rewards from 'component-rewards'

const SumraStatistics = () => {
    return (
        <div className="sumra-referrals-main">
            <Statistics Rewards={Rewards} />
        </div>
    )
}

export default SumraStatistics
