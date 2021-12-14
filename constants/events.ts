import {
  IEvent,
  Sport,
  FootballMarket,
  RugbyMarket,
  HorseRacingMarket,
} from '../types'

export const allEvents: { [key in Sport]: IEvent[] } = {
  [Sport.FOOTBALL]: [
    {
      id: 1,
      sport: Sport.FOOTBALL,
      eventName: 'Leeds Vs Liverpool',
      startTime: '2022-01-02T15:00:00.000Z',
      markets: [
        {
          id: 1,
          type: FootballMarket.RESULT,
          outcomes: [
            {
              id: 100,
              name: 'home',
              odds: 6.333333333,
            },
            {
              id: 101,
              name: 'draw',
              odds: 4.0,
            },
            {
              id: 102,
              name: 'away',
              odds: 1.333333333,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      sport: Sport.FOOTBALL,
      eventName: 'Chelsea Vs Manchester United',
      startTime: '2022-01-02T15:00:00.000Z',
      markets: [
        {
          id: 1,
          type: FootballMarket.RESULT,
          outcomes: [
            {
              id: 103,
              name: 'home',
              odds: 2.0,
            },
            {
              id: 104,
              name: 'draw',
              odds: 4.0,
            },
            {
              id: 105,
              name: 'away',
              odds: 3.0,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      sport: Sport.FOOTBALL,
      eventName: 'Chester Vs Wrexham',
      startTime: '2022-01-02T15:00:00.000Z',
      markets: [
        {
          id: 1,
          type: FootballMarket.RESULT,
          outcomes: [
            {
              id: 106,
              name: 'home',
              odds: 1.333333333,
            },
            {
              id: 107,
              name: 'draw',
              odds: 3.0,
            },
            {
              id: 108,
              name: 'away',
              odds: 4.222222,
            },
          ],
        },
      ],
    },
  ],
  [Sport.RUGBY]: [
    {
      id: 4,
      sport: Sport.RUGBY,
      eventName: 'England Vs Wales',
      startTime: '2022-01-02T15:00:00.000Z',
      markets: [
        {
          id: 1,
          type: RugbyMarket.RESULT,
          outcomes: [
            {
              id: 109,
              name: 'home',
              odds: 6.333333333,
            },
            {
              id: 110,
              name: 'draw',
              odds: 4.0,
            },
            {
              id: 111,
              name: 'away',
              odds: 1.333333333,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      sport: Sport.RUGBY,
      eventName: 'Scotland Vs France',
      startTime: '2022-01-02T15:00:00.000Z',
      markets: [
        {
          id: 1,
          type: RugbyMarket.RESULT,
          outcomes: [
            {
              id: 112,
              name: 'home',
              odds: 2.0,
            },
            {
              id: 113,
              name: 'draw',
              odds: 4.0,
            },
            {
              id: 114,
              name: 'away',
              odds: 3.0,
            },
          ],
        },
      ],
    },
  ],
  [Sport.HORSE_RACING]: [
    {
      id: 6,
      sport: Sport.HORSE_RACING,
      eventName: '1400 York',
      startTime: '2022-01-02T14:00:00.000Z',
      markets: [
        {
          id: 1,
          type: HorseRacingMarket.RESULT,
          outcomes: [
            {
              id: 115,
              name: 'Jerry Springy',
              odds: 6.0,
            },
            {
              id: 116,
              name: 'Chosen Mate',
              odds: 4.0,
            },
            {
              id: 117,
              name: 'Little Nelson',
              odds: 1.0,
            },
            {
              id: 118,
              name: 'Rock the world',
              odds: 1.2,
            },
            {
              id: 119,
              name: 'Red Stripe',
              odds: 11.0,
            },
          ],
        },
      ],
    },
  ],
}
