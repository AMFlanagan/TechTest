import React from 'react'
import Icon from '../../common/Icon'
import { IconName } from '../../../constants/icons'
import {
  ActionTypes,
  IBetSlipEntry,
  useBetSlip,
} from '../../../context/BetSlip'
import placeBet from '../../../utils/placeBet'

import styles from './index.module.scss'
import formatNumbers from '../../../utils/formatNumbers'

interface IProps {
  bet: IBetSlipEntry
}

const BetItem: React.FC<IProps> = (props: IProps) => {
  const { dispatch } = useBetSlip()

  const [stake, setStake] = React.useState('')
  const [odds, setOdds] = React.useState('')

  const clickHandler = () => {
    // Would be call to route with validity check
    const res = placeBet({
      ...props.bet,
      stake: formatNumbers(stake),
      odds: formatNumbers(odds),
    })
    if (res) {
      removeBet()
    }
  }

  const handleChange = (key: string, value: string) => {
    if (key === 'stake') {
      setStake(value)
    }
    if (key === 'odds') {
      setOdds(value)
    }
  }

  const removeBet = () => {
    dispatch({
      type: ActionTypes.REMOVE,
      payload: {
        marketId: props.bet.marketId,
        outcome: props.bet.outcome,
      },
    })
  }

  return (
    <div className={styles.betItemContainer}>
      <div className={styles.top}>
        <div className={styles.info}>
          <div className={styles.outcomeName}>{props.bet.outcome}</div>
          <div className={styles.market}>MarketId: {props.bet.marketId}</div>
          <button onClick={() => removeBet()} className={styles.remove}>
            remove <Icon iconName={IconName.CROSS} />
          </button>
        </div>

        <div className={styles.actions}>
          <label>Stake</label>
          <input
            data-testid="stake"
            name="stake"
            value={stake}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.stake}
            type="number"
            onBlur={() => setStake(formatNumbers(stake))}
          />
          <label>Odds</label>
          <input
            data-testid="odds"
            name="odds"
            value={odds}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.odds}
            type="number"
            onBlur={() => setOdds(formatNumbers(odds))}
          />
        </div>
      </div>
      <button className={styles.placeBet} onClick={() => clickHandler()}>
        Place Bet
      </button>
    </div>
  )
}

BetItem.displayName = 'BetItem'
export default BetItem
