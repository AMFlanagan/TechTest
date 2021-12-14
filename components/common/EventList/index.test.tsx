import EventList from '.'
import { render } from '@testing-library/react'
import { Sport } from '../../../types'
import Event from '../Event'

jest.mock('../Event', () => jest.fn(() => <div>Event</div>))

describe('EventList', () => {
  it('renders as expect', () => {
    const events = [
      {
        id: 1,
        eventName: 'Event Name',
        markets: [],
        sport: Sport.FOOTBALL,
        startTime: '01/02/04',
      },
    ]

    const { asFragment, getByText } = render(
      <EventList events={events} title={'Football'} />
    )

    expect(getByText('Event')).toBeTruthy()
    expect(getByText('Football')).toBeTruthy()
    expect(Event).toBeCalledWith(
      expect.objectContaining({
        event: events[0],
      }),
      expect.anything()
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
