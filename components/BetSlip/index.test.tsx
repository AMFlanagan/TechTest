import { fireEvent, render } from '@testing-library/react'
import placeBets from '../../utils/placeBets'

import BetSlip from '.'

const dispatchMock = jest.fn()

const mockHook = {
  state: {
    bets: [
      {
        eventId: 1,
        eventName: 'eventName',
        market: 'market',
        marketId: 'marketId',
        outcomeId: 1,
        outcomeName: 'outcomeName',
        outcomeOdds: 1,
        stake: '0',
      },
    ],
  },
  dispatch: dispatchMock,
}

jest.mock('../../context/BetSlip', () => ({
  useBetSlip() {
    return mockHook
  },
}))

jest.mock('./BetList', () => jest.fn(() => <div>BetList</div>))
jest.mock('../../utils/placeBets')

describe('BetSlip', () => {
  it('renders as expected', () => {
    const { asFragment, getByText } = render(<BetSlip />)

    expect(getByText('BetList')).toBeTruthy()
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking header opens betslip', () => {
    const { asFragment, getByText } = render(<BetSlip />)

    const firstSnapShot = asFragment()
    fireEvent.click(getByText('Bet Slip'))
    const secondSnapShot = asFragment()

    expect(firstSnapShot).not.toEqual(secondSnapShot)
  })

  it('clicking header opens betslip', () => {
    const { getByText } = render(<BetSlip />)

    fireEvent.click(getByText('Place Bets'))

    expect(placeBets).toBeCalledWith([
      {
        eventId: 1,
        eventName: 'eventName',
        market: 'market',
        marketId: 'marketId',
        outcomeId: 1,
        outcomeName: 'outcomeName',
        outcomeOdds: 1,
        stake: '0',
      },
    ])
  })
})
