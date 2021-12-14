import HomePageContainer from '.'
import { render } from '@testing-library/react'
import { IEvent, Sport } from '../../types'
import EventList from '../common/EventList'

jest.mock('../common/EventList', () => jest.fn(() => <div>EventList</div>))

describe('HomePageContainer', () => {
  it('renders as expect', () => {
    const allEvents: { [key in Sport]: IEvent[] } = {
      [Sport.FOOTBALL]: [
        {
          id: 1,
          eventName: 'Football event Name',
          markets: [],
          sport: Sport.FOOTBALL,
          startTime: '01/02/04',
        },
      ],
      [Sport.HORSE_RACING]: [
        {
          id: 1,
          eventName: 'Horse event Name',
          markets: [],
          sport: Sport.HORSE_RACING,
          startTime: '01/02/04',
        },
      ],
      [Sport.RUGBY]: [
        {
          id: 1,
          eventName: 'Rugby event Name',
          markets: [],
          sport: Sport.RUGBY,
          startTime: '01/02/04',
        },
      ],
    }

    const { asFragment } = render(<HomePageContainer allEvents={allEvents} />)

    expect(EventList).toHaveBeenCalledWith(
      expect.objectContaining({
        title: Sport.FOOTBALL,
        events: allEvents[Sport.FOOTBALL],
      }),
      expect.anything()
    )
    expect(EventList).toBeCalledWith(
      expect.objectContaining({
        title: Sport.HORSE_RACING,
        events: allEvents[Sport.HORSE_RACING],
      }),
      expect.anything()
    )
    expect(EventList).toBeCalledWith(
      expect.objectContaining({
        title: Sport.RUGBY,
        events: allEvents[Sport.RUGBY],
      }),
      expect.anything()
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
