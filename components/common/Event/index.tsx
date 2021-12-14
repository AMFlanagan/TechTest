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
      <div className={styles.eventHeader}>{props.event.eventName}</div>
      <Market
        eventName={props.event.eventName}
        eventId={props.event.id}
        market={props.event.markets[0]}
      />
    </div>
  )
}

Event.displayName = 'Event'

export default Event
