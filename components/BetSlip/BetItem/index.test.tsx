import { fireEvent, render } from '@testing-library/react'
import { IBetSlipEntry, ActionTypes } from '../../../context/BetSlip'
import placeBet from '../../../utils/placeBet'

import BetItem from '.'

const dispatchMock = jest.fn()

const mockHook = {
  dispatch: dispatchMock,
}

jest.mock('../../../context/BetSlip', () => ({
  ...jest.requireActual('../../../context/BetSlip'),
  useBetSlip() {
    return mockHook
  },
}))

jest.mock('../../../utils/placeBet')

describe('Event', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('renders as expect with bets', () => {
    const bet: IBetSlipEntry = {
      outcome: 'outcome',
      marketId: 1,
      odds: '0.00',
      stake: '1.00',
    }

    const { asFragment } = render(<BetItem bet={bet} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('calls utils with the correct paramets when place bet called', () => {
    const bet: IBetSlipEntry = {
      outcome: 'outcome',
      marketId: 1,
      odds: '0.00',
      stake: '1.00',
    }

    const { getByTestId, getByText } = render(<BetItem bet={bet} />)

    const stakeInput = getByTestId('stake')
    const oddsInput = getByTestId('odds')

    fireEvent.change(stakeInput, { target: { value: '32' } })
    fireEvent.change(oddsInput, { target: { value: '23' } })

    fireEvent.click(getByText('Place Bet'))

    expect(placeBet).toBeCalledWith({
      outcome: 'outcome',
      marketId: 1,
      odds: '23.00',
      stake: '32.00',
    })
  })

  it('dispatch called when remove is clicked', () => {
    const bet: IBetSlipEntry = {
      outcome: 'outcome',
      marketId: 1,
      odds: '23.00',
      stake: '32.00',
    }

    const { getByText } = render(<BetItem bet={bet} />)

    fireEvent.click(getByText('remove'))

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toBeCalledWith({
      type: ActionTypes.REMOVE,
      payload: {
        outcome: 'outcome',
        marketId: 1,
      },
    })
  })
})
