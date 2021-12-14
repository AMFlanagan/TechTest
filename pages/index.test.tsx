import { render } from '@testing-library/react'
import { allEvents } from '../constants/events'
import HomePage from '.'
import HomePageContainer from '../components/HomePageContainer'
import { NextPageContext } from 'next'

jest.mock('../components/HomePageContainer', () =>
  jest.fn(() => <div data-testid="HomePageContainer"></div>)
)

// @ts-ignore - TODO: Add global definitions
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(allEvents),
  })
)

describe('HomePage', () => {
  it('renders as expect', () => {
    const { getByTestId, asFragment } = render(
      <HomePage allEvents={allEvents} />
    )

    expect(getByTestId('HomePageContainer')).toBeTruthy()
    expect(HomePageContainer).toBeCalledWith(
      {
        allEvents,
      },
      expect.anything()
    )
    expect(asFragment()).toMatchSnapshot()
  })

  describe('getInitialProps', () => {
    test('returns the correct props for the page', async () => {
      let props

      if (HomePage.getInitialProps) {
        props = await HomePage.getInitialProps({} as NextPageContext)
      }

      expect(props).toEqual({
        allEvents,
      })
    })
  })
})
