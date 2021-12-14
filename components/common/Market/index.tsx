import React from 'react'
import { IMarket } from '../../../types'
import Outcome from '../Outcome'

import styles from './index.module.scss'

interface IProps {
  market: IMarket
}

const Market: React.FC<IProps> = (props: IProps) => {
  return (
    <div className={styles.marketContainer}>
      <div className={styles.marketName}>{props.market.type}</div>
      <div className={styles.outcomes}>
        {props.market.outcomes.slice(0, 4).map((outcome, i: number) => {
          return <Outcome key={i} outcome={outcome} />
        })}
      </div>
    </div>
  )
}

Market.displayName = 'Market'

export default Market
