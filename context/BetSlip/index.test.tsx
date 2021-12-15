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
      bets: [
        {
          eventId: 1,
          outcomeId: 1,
        } as IBetSlipEntry,
      ],
    }

    const action = {
      type: ActionTypes.CLEAR_ALL,
    }

    const newState = bestSlipReducer(state, action)

    expect(newState).toEqual({
      bets: [],
    })
  })

  it('adds a bet', () => {
    const state = {
      bets: [],
    }

    const action = {
      type: ActionTypes.ADD,
      payload: {
        eventId: 1,
        outcomeId: 1,
      },
    }

    const newState = bestSlipReducer(state, action)

    expect(newState).toEqual({
      bets: [
        {
          eventId: 1,
          outcomeId: 1,
        },
      ],
    })
  })

  it('removes a bet', () => {
    const state = {
      bets: [
        {
          eventId: 1,
          outcomeId: 1,
        } as IBetSlipEntry,
        {
          eventId: 2,
          outcomeId: 2,
        } as IBetSlipEntry,
      ],
    }

    const action = {
      type: ActionTypes.REMOVE,
      payload: {
        eventId: 1,
        outcomeId: 1,
      },
    }

    const newState = bestSlipReducer(state, action)

    expect(newState).toEqual({
      bets: [
        {
          eventId: 2,
          outcomeId: 2,
        },
      ],
    })
  })

  it('updates a stake', () => {
    const state = {
      bets: [
        {
          eventId: 1,
          outcomeId: 1,
        } as IBetSlipEntry,
        {
          eventId: 2,
          outcomeId: 2,
        } as IBetSlipEntry,
      ],
    }

    const action = {
      type: ActionTypes.UPDATE,
      payload: {
        eventId: 1,
        outcomeId: 1,
        stake: 1,
      },
    }

    const newState = bestSlipReducer(state, action)

    expect(newState).toEqual({
      bets: [
        {
          eventId: 1,
          outcomeId: 1,
          stake: 1,
        },
        {
          eventId: 2,
          outcomeId: 2,
        },
      ],
    })
  })
})
