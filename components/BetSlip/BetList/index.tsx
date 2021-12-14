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
          <BetItem key={i} bet={bet} />
        ))
      )}
    </div>
  )
}

BetList.displayName = 'BetList'
export default BetList
