import { render } from '@testing-library/react'
import Event from '../Event'

import EventList from '.'

jest.mock('../Event', () => jest.fn(() => <div>Event</div>))

describe('EventList', () => {
  it('renders as expect', () => {
    const events = [
      {
        marketId: 1,
        outcomes: ['Team A Win', 'Draw', 'Team B Win'],
      },
    ]

    const { asFragment, getByText } = render(
      <EventList events={events} />
    )

    expect(getByText('Event')).toBeTruthy()
    expect(Event).toBeCalledWith(
      expect.objectContaining({
        event: events[0],
      }),
      expect.anything()
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
