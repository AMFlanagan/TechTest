import React from 'react'
import { IOutcome } from '../../../types'
import formatOdds from '../../../utils/formatOdds'

import styles from './index.module.scss'

interface IProps {
  outcome: IOutcome
}

const Outcome: React.FC<IProps> = (props: IProps) => {
  return (
    <button className={styles.outcome}>
      <div className={styles.name}>{props.outcome.name}</div>
      <div className={styles.odds}>{formatOdds(props.outcome.odds)}</div>
    </button>
  )
}

Outcome.displayName = 'Outcome'

export default Outcome
