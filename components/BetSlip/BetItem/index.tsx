import Icon from '../../common/Icon'
import { IconName } from '../../../constants/icons'
import {
  ActionTypes,
  IBetSlipEntry,
  useBetSlip,
} from '../../../context/BetSlip'
import React from 'react'
import formatNumbers from '../../../utils/formatNumbers'

import styles from './index.module.scss'

interface IProps {
  bet: IBetSlipEntry
}

const BetItem: React.FC<IProps> = (props: IProps) => {
  const { dispatch } = useBetSlip()
  const [stake, setStake] = React.useState(props.bet.stake)

  const removeBet = () => {
    dispatch({
      type: ActionTypes.REMOVE,
      payload: {
        eventId: props.bet.eventId,
        outcomeId: props.bet.outcomeId,
      },
    })
  }

  const updateStake = (value: string) => {
    dispatch({
      type: ActionTypes.UPDATE,
      payload: {
        eventId: props.bet.eventId,
        outcomeId: props.bet.outcomeId,
        stake: formatNumbers(Number(value)),
      },
    })
  }

  return (
    <div className={styles.betItemContainer}>
      <div className={styles.info}>
        <div className={styles.outcomeName}>
          {props.bet.outcomeName}
          <div className={styles.odds}>
            {formatNumbers(props.bet.outcomeOdds)}
          </div>
        </div>
        <div className={styles.market}>{props.bet.market}</div>
        <div className={styles.eventName}>{props.bet.eventName}</div>
      </div>
      <div className={styles.actions}>
        <button onClick={() => removeBet()} className={styles.remove}>
          remove <Icon iconName={IconName.CROSS} />
        </button>
        <div>£</div>
        <input
          type="number"
          required
          min="0"
          step="0.1"
          // This is bad...
          value={stake}
          pattern="^\d+(?:\.\d{1,2})?$"
          onChange={(e) => {
            setStake(e.target.value)
            updateStake(e.target.value)
          }}
          onBlur={() => setStake(formatNumbers(stake))}
        ></input>
      </div>
    </div>
  )
}

BetItem.displayName = 'BetItem'
export default BetItem
