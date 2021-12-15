import { render } from '@testing-library/react'
import { BetSlipProvider, bestSlipReducer, ActionTypes, IBetSlipEntry } from '.'

describe('BetSlipContext', () => {
  it('renders as expected', () => {
    const component = <div>test</div>

    const { asFragment } = render(
      <BetSlipProvider>{component}</BetSlipProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('betSlipReducer', () => {
  it('adds a bet', () => {
    const state = {
      bets: [],
    }

    const action = {
      type: ActionTypes.ADD,
      payload: {
        marketId: 1,
        outcome: 'outcome',
      },
    }

    const newState = bestSlipReducer(state, action)

    expect(newState).toEqual({
      bets: [
        {
          marketId: 1,
          outcome: 'outcome',
        },
      ],
    })
  })

  it('removes a bet', () => {
    const state = {
      bets: [
        {
          marketId: 1,
          outcome: 'outcome',
        },
        {
          marketId: 2,
          outcome: 'outcome',
        },
      ],
    }

    const action = {
      type: ActionTypes.REMOVE,
      payload: {
        marketId: 1,
        outcome: 'outcome',
      },
    }

    const newState = bestSlipReducer(state, action)

    expect(newState).toEqual({
      bets: [
        {
          marketId: 2,
          outcome: 'outcome',
        },
      ],
    })
  })
})
