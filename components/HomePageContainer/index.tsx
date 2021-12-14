import React from 'react'
import { IEvent, Sport } from '../../types'

import EventList from '../common/EventList'

interface IProps {
  allEvents: { [key in Sport]: IEvent[] }
}

const HomePage: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      {Object.entries(props.allEvents).map((sport, i: number) => {
        const [title, events] = sport
        return <EventList key={i} title={title} events={events} />
      })}
    </div>
  )
}

HomePage.displayName = 'HomePage'

export default HomePage
