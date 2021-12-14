import MainContainer from '.'
import { render } from '@testing-library/react'

describe('Event', () => {
  it('renders as expect', () => {
    const { getByTestId, asFragment } = render(
      <MainContainer>
        <div data-testid="child">child</div>
      </MainContainer>
    )

    expect(getByTestId('child')).toBeTruthy()
    expect(asFragment()).toMatchSnapshot()
  })
})
