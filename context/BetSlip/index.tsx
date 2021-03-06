import React from 'react'

export interface IBetSlipEntry {
  marketId: number
  outcome: string
}

interface IState {
  bets: IBetSlipEntry[]
}

export enum ActionTypes {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

type IAction = {
  type: ActionTypes
  payload?: any
}

const initialState = {
  bets: [],
}

interface IBetSlipContext {
  state: IState
  dispatch: (action: IAction) => IState | void
}

export const BetSlipContext = React.createContext<IBetSlipContext>({
  state: initialState,
  dispatch: null as any,
})

// TODO action type
export const bestSlipReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ActionTypes.ADD: {
      return {
        ...state,
        bets: [
          ...state.bets,
          {
            ...action.payload,
          }
        ],
      }
    }
    case ActionTypes.REMOVE: {
      const newBets = state.bets.filter(
        (bet) =>
          !(
            bet.marketId === action.payload.marketId &&
            bet.outcome === action.payload.outcome
          )
      )

      return {
        ...state,
        bets: newBets,
      }
    }
  }
}

export const BetSlipProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = React.useReducer(bestSlipReducer, initialState)
  const value = { state, dispatch }

  return (
    <BetSlipContext.Provider value={value}>{children}</BetSlipContext.Provider>
  )
}

export const useBetSlip = () => {
  const context = React.useContext(BetSlipContext)
  if (context === undefined) {
    throw new Error('useBetSlip must be used within a BetSlipContext')
  }
  return context
}
