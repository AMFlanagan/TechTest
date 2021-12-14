import React from 'react'
import { IEvent } from 'types'

import Event from 'components/common/Event'
import formatText from 'utils/formatText'

import styles from './index.module.scss'

interface IProps {
  events: IEvent[]
  title: string
}

const EventList: React.FC<IProps> = (props: IProps) => {
  return (
    <div className={styles.list}>
      <div className={styles.title}>{formatText(props.title)}</div>
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
