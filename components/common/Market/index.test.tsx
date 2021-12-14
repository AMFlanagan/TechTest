import { render } from '@testing-library/react'

import Market from '.'
import { FootballMarket, IMarket } from '../../../types'
import Outcome from './Outcome'

jest.mock('./Outcome', () => jest.fn(() => <div></div>))

const dispatchMock = jest.fn()

const mockHook = {
  dispatch: dispatchMock,
}

jest.mock('../../../context/BetSlip', () => ({
  useBetSlip() {
    return mockHook
  },
}))

describe('Market', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders as expect', () => {
    const market: IMarket = {
      id: 1,
      outcomes: [
        {
          id: 1,
          name: 'home',
          odds: 1.0,
        },
        {
          id: 2,
          name: 'away',
          odds: 2.0,
        },
      ],
      type: FootballMarket.RESULT,
    }

    const { asFragment, getByText } = render(
      <Market market={market} eventName={''} eventId={0} />
    )

    expect(getByText(FootballMarket.RESULT)).toBeTruthy()

    market.outcomes.forEach((outcome) => {
      expect(Outcome).toBeCalledWith(
        expect.objectContaining({
          outcome,
        }),
        expect.anything()
      )
    })

    expect(asFragment()).toMatchSnapshot()
  })

  it('calls Outcome a maximum of 4 times', () => {
    const market: IMarket = {
      id: 1,
      outcomes: [
        {
          id: 1,
          name: 'home',
          odds: 1.0,
        },
        {
          id: 2,
          name: 'away',
          odds: 2.0,
        },
        {
          id: 3,
          name: 'draw',
          odds: 1.0,
        },
        {
          id: 4,
          name: 'none',
          odds: 2.0,
        },
        {
          id: 5,
          name: 'none',
          odds: 2.0,
        },
      ],
      type: FootballMarket.RESULT,
    }

    render(<Market market={market} eventName={''} eventId={0} />)
    expect(Outcome).toHaveBeenCalledTimes(4)
  })
})
