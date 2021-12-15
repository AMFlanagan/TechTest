import React from 'react'
import { IOutcome } from '../../../../types'

import formatNumbers from '../../../../utils/formatNumbers'
import { useBetSlip } from '../../../../context/BetSlip'

import styles from './index.module.scss'

interface IProps {
  outcome: IOutcome
  onSelect: (
    outcomeId: number,
    outcomeName: string,
    outcomeOdds: number,
    inBetSlip: boolean
  ) => void
}

const Outcome: React.FC<IProps> = (props: IProps) => {
  const { state } = useBetSlip()

  const isInBetSlip = () =>
    !!state.bets.find((bet: any) => bet.outcomeId === props.outcome.id)

  return (
    <button
      onClick={() =>
        props.onSelect(
          props.outcome.id,
          props.outcome.name,
          props.outcome.odds,
          isInBetSlip()
        )
      }
      className={`${styles.outcome} ${isInBetSlip() && styles.selected}`}
    >
      <div className={styles.name}>{props.outcome.name}</div>
      <div className={styles.odds}>{formatNumbers(props.outcome.odds)}</div>
    </button>
  )
}

Outcome.displayName = 'Outcome'

export default Outcome
