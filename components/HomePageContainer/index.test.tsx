import HomePageContainer from '.'
import { render } from '@testing-library/react'
import { IEvent, Sport } from '../../types'
import EventList from '../common/EventList'

jest.mock('../common/EventList', () => jest.fn(() => <div>EventList</div>))

describe('HomePageContainer', () => {
  it('renders as expect', () => {
    const allEvents: IEvent[] = [
      {
        marketId: 1,
        outcomes: ['Team A Win', 'Draw', 'Team B Win'],
      },
      {
        marketId: 2,
        outcomes: ['Team C Win', 'Draw', 'Team D Win'],
      },
      {
        marketId: 3,
        outcomes: ['Team E Win', 'Draw', 'Team F Win'],
      },
    ]

    const { asFragment } = render(<HomePageContainer allEvents={allEvents} />)

    expect(EventList).toBeCalledWith(
      expect.objectContaining({
        events: allEvents,
      }),
      expect.anything()
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
