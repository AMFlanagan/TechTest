import React from 'react'

import { useBetSlip } from '../../../../context/BetSlip'

import styles from './index.module.scss'

interface IProps {
  outcome: string
  marketId: number
  onSelect: (outcome: string, inBetSlip: boolean) => void
}

const Outcome: React.FC<IProps> = (props: IProps) => {
  const { state } = useBetSlip()

  const isInBetSlip = () =>
    !!state.bets.find(
      (bet: any) =>
        bet.outcome === props.outcome && bet.marketId === props.marketId
    )

  return (
    <button
      onClick={() => props.onSelect(props.outcome, isInBetSlip())}
      className={`${styles.outcome} ${isInBetSlip() && styles.selected}`}
    >
      <div className={styles.name}>{props.outcome}</div>
    </button>
  )
}

Outcome.displayName = 'Outcome'

export default Outcome
