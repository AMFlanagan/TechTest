
import formatText from './formatText'

describe('formatText()', () => {
  const testCases = [
    {
      input: "football",
      expectedOutput: "Football",
    },
    {
      input: "some-test",
      expectedOutput: "Some test",
    },
    {
      input: "Football",
      expectedOutput: "Football",
    },
  ]

  testCases.forEach((testCase) => {
    it(`should return ${testCase.expectedOutput} when passed ${testCase.input}`, () => {
      expect(formatText(testCase.input)).toEqual(testCase.expectedOutput)
    })
  })
})