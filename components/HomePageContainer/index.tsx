import React from 'react'
import { IEvent, Sport } from 'types'

import EventList from 'components/common/EventList'

interface IProps {
  allEvents: { [key in Sport]: IEvent[] }
}

const HomePage: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      {Object.entries(props.allEvents).map((sport) => {
        const [title, events] = sport
        return <EventList title={title} events={events} />
      })}
    </div>
  )
}

HomePage.displayName = 'HomePage'

export default HomePage
