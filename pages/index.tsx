import type { NextPage } from 'next'
import HomePageContainer from 'components/HomePageContainer'
import { IEvent, Sport } from 'types'

interface IProps {
  events: { [key in Sport]: IEvent[] }
}

const HomePage: NextPage<IProps> = (props: IProps) => {
  return <HomePageContainer allEvents={props.events} />
}

HomePage.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/event')
  const events = await res.json()

  return {
    events,
  }
}

export default HomePage
