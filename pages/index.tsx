import type { NextPage } from 'next'
import HomePageContainer from '../components/HomePageContainer'
import { IEvent } from '../types'

interface IProps {
  allEvents: IEvent[]
}

const HomePage: NextPage<IProps> = (props: IProps) => {
  return <HomePageContainer allEvents={props.allEvents} />
}

HomePage.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/event')
  const allEvents = await res.json()

  return {
    allEvents,
  }
}

export default HomePage
