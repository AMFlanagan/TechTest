import formatOdds from './formatOdds'

describe('formatOdds()', () => {
  const testCases = [
    {
      input: 3.0,
      expectedOutput: '3.00',
    },
    {
      input: 3,
      expectedOutput: '3.00',
    },
    {
      input: 3.33333,
      expectedOutput: '3.33',
    },
    {
      input: 3.6666,
      expectedOutput: '3.67',
    },
    {
      input: 300.0,
      expectedOutput: '300.00',
    },
    {
      input: 300.0,
      expectedOutput: '300.00',
    },
  ]

  testCases.forEach((testCase) => {
    it(`should return ${testCase.expectedOutput} when passed ${testCase.input}`, () => {
      expect(formatOdds(testCase.input)).toEqual(testCase.expectedOutput)
    })
  })
})
