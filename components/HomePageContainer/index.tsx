import React from 'react'
import { IEvent } from '../../types'

import EventList from '../common/EventList'

interface IProps {
  allEvents: IEvent[]
}

const HomePage: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
        <EventList events={props.allEvents} />
    </div>
  )
}

HomePage.displayName = 'HomePage'

export default HomePage
