import Outcome from '.'
import { render } from '@testing-library/react'
import { IOutcome } from '../../../types'

describe('Outcome', () => {
  it('renders as expect', () => {
    const outcome: IOutcome = {
      id: 1,
      name: 'home',
      odds: 1.0,
    }

    const { asFragment, getByText } = render(<Outcome outcome={outcome} />)

    expect(getByText('home')).toBeTruthy()
    expect(getByText('1.00')).toBeTruthy()

    expect(asFragment()).toMatchSnapshot()
  })
})
