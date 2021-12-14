import { render } from '@testing-library/react'
import { IBetSlipEntry } from 'context/BetSlip'

import BetItem from '.'

jest.mock('../BetItem', () => jest.fn(() => <div data-testid="BetItem"></div>))

describe('Event', () => {
  it('renders as expect with bets', () => {
    const bet: IBetSlipEntry = {
      eventId: 1,
      eventName: 'name',
      market: 'market',
      marketId: 1,
      outcomeId: 1,
      outcomeName: 'name',
      outcomeOdds: 0.222,
      stake: '0.00',
    }

    const { asFragment, getByTestId } = render(<BetItem bet={bet} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
