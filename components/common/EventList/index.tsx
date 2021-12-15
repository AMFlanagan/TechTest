import React from 'react'
import { IEvent } from '../../../types'

import Event from '../Event'

import styles from './index.module.scss'

interface IProps {
  events: IEvent[]
}

const EventList: React.FC<IProps> = (props: IProps) => {
  return (
    <div className={styles.list}>
      <div className={styles.eventsContainer}>
        {props.events.map((event: IEvent, i: number) => {
          return <Event key={i} event={event} />
        })}
      </div>
    </div>
  )
}

EventList.displayName = 'EventList'

export default EventList
