import handler from './[[...slug]]'
import { createMocks } from 'node-mocks-http'
import { allEvents } from '../../../constants/events'
import { Sport } from '../../../types'

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

  it('should return expected response for all football', () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        slug: ['football'],
      },
    })

    handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(allEvents[Sport.FOOTBALL])
  })

  it('should return expected response for all rugby', () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        slug: ['rugby'],
      },
    })

    handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(allEvents[Sport.RUGBY])
  })

  it('should return expected response for all horse-racing', () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        slug: ['horse-racing'],
      },
    })

    handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(allEvents[Sport.HORSE_RACING])
  })

  it('throws an error if the sport is not found', () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        slug: ['potato-curling'],
      },
    })

    handler(req, res)

    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toEqual({ error: 'Sport not found' })
  })
})
