import { render } from '@testing-library/react'
import { IEvent } from '../../../types'
import Outcome from './Outcome'

import Market from '.'

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
    const event: IEvent = {
      marketId: 1,
      outcomes: ['Team A Win', 'Draw', 'Team B Win'],
    }

    const { asFragment } = render(
      <Market event={event} />
    )

    event.outcomes.forEach((outcome) => {
      expect(Outcome).toBeCalledWith(
        expect.objectContaining({
          outcome,
        }),
        expect.anything()
      )
    })

    expect(asFragment()).toMatchSnapshot()
  })
})
