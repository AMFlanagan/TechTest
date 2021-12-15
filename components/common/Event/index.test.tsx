import Event from '.'
import { render } from '@testing-library/react'
import { IEvent } from '../../../types'
import Market from '../Market'

jest.mock('../Market', () => jest.fn(() => <div>Market</div>))

describe('Event', () => {
  it('renders as expected', () => {
    const event: IEvent = {
      marketId: 1,
      outcomes: ['Team A Win', 'Draw', 'Team B Win'],
    }
    const { getByText, asFragment } = render(<Event event={event} />)

    expect(getByText('Market')).toBeTruthy()
    expect(asFragment()).toMatchSnapshot()
    expect(Market).toBeCalledWith(
      {
        event,
      },
      expect.anything()
    )
  })
})
