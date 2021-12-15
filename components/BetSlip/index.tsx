import React from 'react'

import BetList from './BetList'
import { IconName } from '../../constants/icons'
import Icon from '../common/Icon'

import { useBetSlip } from '../../context/BetSlip'

import styles from './index.module.scss'

enum ViewState {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

const BetSlip: React.FC = () => {
  const { state } = useBetSlip()
  const [viewState, setViewState] = React.useState(ViewState.CLOSED)

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
    </div>
  )
}

BetSlip.displayName = 'BetSlip'
export default BetSlip
