const { sum, sumString: mySumString } = require('./sum')

const sumString = jest.fn(mySumString)

beforeAll(() => {
  console.log('Execute before all tests')
})

afterAll(() => {
  console.log('Execute after all tests')
})

beforeEach(() => {
  console.log('Execute before each tests')
})

afterEach(() => {
  console.log('Execute after each tests')
})

describe('Sum tests', () => {
  test('Sum testing', () => {
    expect(sum(5, 2)).toBe(7)
    expect(sum(5, '20')).toBe(25)
    expect(sum(5, NaN)).toBeNaN()
    expect(sum(5, 'Ali')).toBeNaN()
  })

  it('Sum string testing', () => {
    expect(sumString(2, 3)).toBe('Sum is 5')
    expect(sumString(2, NaN)).toBe('Sum is NaN')
    expect(sumString(2, '20')).toBe('Sum is 22')
    expect(sumString(2, 'Ali')).toBe('Sum is NaN')
    expect(sumString).toBeCalledTimes(4)
    expect(sumString).toBeCalledWith(2, 3)
    expect(sumString).toBeCalledWith(2, NaN)
    expect(sumString).toBeCalledWith(2, '20')
    expect(sumString).toBeCalledWith(2, 'Ali')
  })
})

// if (sum(5, 6) !== 11) {
//   throw 'Test fail'
// }

// if (sum('5', 6) !== 11) {
//   throw 'Test fail'
// }

// if (!Number.isNaN(sum('Ali', 0))) {
//   throw 'Test fail'
// }

// if (!Number.isNaN(sum())) {
//   throw 'Test fail'
// }
