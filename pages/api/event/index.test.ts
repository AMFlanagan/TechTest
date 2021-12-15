import handler from '.'
import { createMocks } from 'node-mocks-http'
import { allEvents } from '../../../constants/events'

describe('handler', () => {
  it('should return expected response for all sports', () => {
    const { req, res } = createMocks({
      method: 'GET',
      path: '/events',
    })

    handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(allEvents)
  })
})
