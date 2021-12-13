export enum Sport {
  FOOTBALL = 'football',
  RUGBY = 'rugby',
  HORSE_RACING = 'horse-racing',
}

export enum FootballMarket {
  RESULT = 'Result',
  NEXT_GOAL = 'Next goal',
}

export enum RugbyMarket {
  RESULT = 'Result',
  NEXT_TRY = 'Next Try',
}

export enum HorseRacingMarket {
  RESULT = 'Result',
}

export interface IOutcome {
  id: number
  name: string
  odds: number
}

export type Market = FootballMarket | HorseRacingMarket | RugbyMarket

export interface IMarket {
  type: Market
  outcomes: IOutcome[]
}

export interface IEvent {
  id: number
  sport: Sport
  eventName: string
  markets: IMarket[]
  startTime: string
}
