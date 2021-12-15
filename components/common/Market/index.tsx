import React from 'react'
import Outcome from './Outcome'

import { ActionTypes, useBetSlip } from '../../../context/BetSlip'
import { IEvent } from '../../../types'

import styles from './index.module.scss'

// This Compoent may seem useless,
// will explain why it's here during chat
interface IProps {
  event: IEvent
}

const Market: React.FC<IProps> = (props: IProps) => {
  const { dispatch } = useBetSlip()

  const onSelect = React.useCallback((outcome: string, inBetSlip: boolean) => {
    inBetSlip
      ? dispatch({
          type: ActionTypes.REMOVE,
          payload: {
            marketId: props.event.marketId,
            outcome,
          },
        })
      : dispatch({
          type: ActionTypes.ADD,
          payload: {
            marketId: props.event.marketId,
            outcome,
          },
        })
  }, [])

  return (
    <div className={styles.marketContainer}>
      <div className={styles.marketName}>Result</div>
      <div className={styles.outcomes}>
        {props.event.outcomes.map((outcome, i: number) => {
          return (
            <Outcome
              key={i}
              outcome={outcome}
              marketId={props.event.marketId}
              onSelect={onSelect}
            />
          )
        })}
      </div>
    </div>
  )
}

Market.displayName = 'Market'

export default Market
