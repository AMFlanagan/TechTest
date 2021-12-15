import Outcome from '.'

import { fireEvent, render } from '@testing-library/react'

const mockHook = {
  state: {
    bets: [
      {
        marketId: 2,
        outcome: 'Team B Win'
      }
    ]
  },
}

jest.mock('../../../../context/BetSlip', () => ({
  useBetSlip() {
    return mockHook
  },
}))

describe('Outcome', () => {
  it('renders as expect', () => {
    const outcome = 'Team A Win'

    const { asFragment, getByText } = render(
      <Outcome onSelect={() => {}} marketId={1} outcome={outcome} />
    )

    expect(getByText('Team A Win')).toBeTruthy()
    expect(asFragment()).toMatchSnapshot()
  })

  it('calls onSelect when clicked and not selected', () => {
    const outcome = 'Team A Win'
    const onSelectMock = jest.fn()

    const { getByText } = render(
      <Outcome onSelect={onSelectMock} marketId={1} outcome={outcome} />
    )

    fireEvent.click(getByText('Team A Win'))

    expect(onSelectMock).toBeCalledWith(
      'Team A Win',
      false
    )
  })

  it('calls onSelect when clicked and selected', () => {
    const outcome = 'Team B Win'
    const onSelectMock = jest.fn()

    const { getByText } = render(
      <Outcome onSelect={onSelectMock} marketId={2} outcome={outcome} />
    )

    fireEvent.click(getByText('Team B Win'))

    expect(onSelectMock).toBeCalledWith(
      'Team B Win',
      true
    )
  })
})
