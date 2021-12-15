import { IBetSlipEntry } from '../../../context/BetSlip'
import React from 'react'
import BetItem from '../BetItem'

import styles from './index.module.scss'

interface IProps {
  bets: IBetSlipEntry[]
}

const BetList: React.FC<IProps> = (props: IProps) => {
  return (
    <div className={styles.betListContainer}>
      {props.bets.length === 0 ? (
        <div className={styles.noBet}>Nothing in Betslip</div>
      ) : (
        props.bets.map((bet: IBetSlipEntry, i: number) => (
          // This wouldn't be an issue if all odds and stake state was
          // handled in the context as was planned
          <BetItem key={`${bet.marketId}${bet.outcome}`} bet={bet} />
        ))
      )}
    </div>
  )
}

BetList.displayName = 'BetList'
export default BetList
