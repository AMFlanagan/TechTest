import Outcome from '.'
import { fireEvent, render } from '@testing-library/react'
import { IOutcome } from '../../../../types'

describe('Outcome', () => {
  it('renders as expect', () => {
    const outcome: IOutcome = {
      id: 1,
      name: 'home',
      odds: 1.0,
    }

    const { asFragment, getByText } = render(
      <Outcome onSelect={() => {}} outcome={outcome} />
    )

    expect(getByText('home')).toBeTruthy()
    expect(getByText('1.00')).toBeTruthy()

    expect(asFragment()).toMatchSnapshot()
  })

  it('calls onSelect when clicked', () => {
    const outcome: IOutcome = {
      id: 1,
      name: 'home',
      odds: 1.0,
    }
    const onSelectMock = jest.fn()

    const { getByText } = render(
      <Outcome onSelect={onSelectMock} outcome={outcome} />
    )

    fireEvent.click(getByText('home'))

    expect(onSelectMock).toBeCalledWith(
      outcome.id,
      outcome.name,
      outcome.odds,
      false
    )
  })
})
