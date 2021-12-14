import Event from '.'
import { render } from '@testing-library/react'
import { IEvent, Sport, FootballMarket } from '../../../types'
import Market from '../Market'

jest.mock('../Market', () => jest.fn(() => <div>Market</div>))

describe('Event', () => {
  it('renders as expect', () => {
    const event: IEvent = {
      id: 1,
      eventName: 'Event Name',
      markets: [
        {
          outcomes: [
            {
              id: 1,
              name: 'home',
              odds: 1.0,
            },
          ],
          type: FootballMarket.RESULT,
        },
      ],
      sport: Sport.FOOTBALL,
      startTime: '01/02/04',
    }
    const { getByText, asFragment } = render(<Event event={event} />)

    expect(getByText('Market')).toBeTruthy()
    expect(getByText(event.eventName)).toBeTruthy()
    expect(asFragment()).toMatchSnapshot()
    expect(Market).toBeCalledWith(
      {
        market: event.markets[0],
      },
      expect.anything()
    )
  })
})
