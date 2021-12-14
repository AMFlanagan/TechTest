import { render, fireEvent } from '@testing-library/react'
import NavBar from '.'

const mockUseRouter = () => ({
  route: '',
  pathname: '',
  query: '',
  asPath: '',
  push: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
  beforePopState: jest.fn(() => console.log('skjdbfksjdfbdsjfbsd')),
  prefetch: jest.fn(() => null),
})

jest.mock('next/router', () => ({
  useRouter() {
    return mockUseRouter
  },
}))

describe('Event', () => {
  it('renders as expect', () => {
    const { getByText, asFragment } = render(<NavBar />)

    expect(getByText('Home')).toBeTruthy()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders as expect on the homepage', () => {
    const { getByText, asFragment } = render(<NavBar />)

    expect(getByText('Home')).toBeTruthy()
    expect(asFragment()).toMatchSnapshot()
  })

  describe('actions', () => {
    it('Test the page redirect after click', () => {
      const { getByText } = render(<NavBar />)
      fireEvent(getByText('Home'), new MouseEvent('click'))
      // Need to assert on router somehow - TODO
    })
  })
})
