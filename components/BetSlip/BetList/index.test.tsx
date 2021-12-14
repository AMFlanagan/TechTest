import { render } from '@testing-library/react'
import { IBetSlipEntry } from '../../../context/BetSlip'
import BetItem from '../BetItem'

import BetList from '.'

jest.mock('../BetItem', () => jest.fn(() => <div data-testid="BetItem"></div>))

describe('Event', () => {
  it('renders as expect with no bets', () => {
    const { asFragment, queryAllByTestId, findByText } = render(
      <BetList bets={[]} />
    )

    expect(findByText('Nothing in Betslip')).toBeTruthy()
    expect(queryAllByTestId('BetItem')).toEqual([])
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders as expect with bets', () => {
    const bets: IBetSlipEntry[] = [
      {
        eventId: 1,
        eventName: 'name',
        market: 'market',
        outcomeId: 1,
        outcomeName: 'name',
        outcomeOdds: 0.222,
        stake: '0',
      },
    ]
    const { asFragment, getByTestId } = render(<BetList bets={bets} />)

    expect(getByTestId('BetItem')).toBeTruthy()
    expect(BetItem).toBeCalled()
    expect(asFragment()).toMatchSnapshot()
  })
})
