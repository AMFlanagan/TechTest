import React from 'react'
import { IEvent } from 'types'
import Market from '../Market'

import styles from './index.module.scss'

interface IProps {
  event: IEvent
}

const Event: React.FC<IProps> = (props: IProps) => {
  return (
    <div className={styles.event}>
      <div className={styles.eventHeader}>
        Market Id: {props.event.marketId}
      </div>
      <Market event={props.event} />
    </div>
  )
}

Event.displayName = 'Event'

export default Event
