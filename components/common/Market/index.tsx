import React from 'react'
import { IMarket } from '../../../types'
import Outcome from './Outcome'

import { ActionTypes, useBetSlip } from '../../../context/BetSlip'
import formatNumbers from '../../../utils/formatNumbers'

import styles from './index.module.scss'

interface IProps {
  eventName: string
  eventId: number
  market: IMarket
}

const Market: React.FC<IProps> = (props: IProps) => {
  const { dispatch } = useBetSlip()

  const onSelect = React.useCallback(
    (
      outcomeId: number,
      outcomeName: string,
      outcomeOdds: number,
      inBetSlip: boolean
    ) => {
      inBetSlip
        ? dispatch({
            type: ActionTypes.REMOVE,
            payload: {
              eventId: props.eventId,
              outcomeId,
            },
          })
        : dispatch({
            type: ActionTypes.ADD,
            payload: {
              eventId: props.eventId,
              eventName: props.eventName,
              market: props.market.type,
              marketId: props.market.id,
              outcomeId,
              outcomeName,
              outcomeOdds: formatNumbers(outcomeOdds),
            },
          })
    },
    []
  )

  return (
    <div className={styles.marketContainer}>
      <div className={styles.marketName}>{props.market.type}</div>
      <div className={styles.outcomes}>
        {props.market.outcomes.slice(0, 4).map((outcome, i: number) => {
          return <Outcome key={i} outcome={outcome} onSelect={onSelect} />
        })}
      </div>
    </div>
  )
}

Market.displayName = 'Market'

export default Market
