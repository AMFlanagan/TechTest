import React from 'react'

import BetList from './BetList'
import { IconName } from '../../constants/icons'
import Icon from '../common/Icon'

import { ActionTypes, useBetSlip } from '../../context/BetSlip'

import placeBets from '../../utils/placeBets'

import styles from './index.module.scss'

enum ViewState {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

const BetSlip: React.FC = () => {
  const { state, dispatch } = useBetSlip()
  const [viewState, setViewState] = React.useState(ViewState.CLOSED)

  const clickHandler = () => {
    // Would be call to route with validity check
    const res = placeBets(state.bets)
    if (res) {
      dispatch({
        type: ActionTypes.CLEAR_ALL,
      })
    }
  }

  return (
    <div
      className={`${styles.betSlipContainer} ${
        viewState === ViewState.CLOSED && styles.closed
      }`}
    >
      <button
        className={styles.header}
        onClick={() =>
          viewState === ViewState.OPEN
            ? setViewState(ViewState.CLOSED)
            : setViewState(ViewState.OPEN)
        }
      >
        <div className={styles.title}>Bet Slip</div>
        <div
          className={`${styles.icon} ${
            viewState === ViewState.CLOSED && styles.closed
          }`}
        >
          <Icon iconName={IconName.UP} />
        </div>
      </button>
      <BetList bets={state.bets} />
      <div className={styles.base}>
        <button className={styles.placeBets} onClick={() => clickHandler()}>
          Place Bets
        </button>
      </div>
    </div>
  )
}

BetSlip.displayName = 'BetSlip'
export default BetSlip
