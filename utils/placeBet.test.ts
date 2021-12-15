import placeBet from './placeBet'

describe('placeBet()', () => {
  it('should return true', () => {
    global.alert = jest.fn();
    expect(placeBet({
      marketId: 1,
      outcome: 'Team A Win'
    })).toEqual(true)
  })
})
