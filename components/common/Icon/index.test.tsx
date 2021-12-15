import Icon from '.'
import { render } from '@testing-library/react'
import { IconName } from '../../../constants/icons'

describe('Icons', () => {
  Object.keys(IconName).forEach((key) => {
    it(`renders as expect for ${key}`, () => {
      const { asFragment } = render(<Icon iconName={key as IconName} />)
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
