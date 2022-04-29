// import { render } from 'react-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter tests', () => {
  //   test('Counter testing pure', () => {
  //     const div = document.createElement('div')
  //     // const root = ReactDOM.createRoot(div)
  //     render(<Counter />, div)
  //     const h3 = div.querySelector('h3').textContent
  //     expect(h3).toBe('My Counter')
  //     const button = div.querySelector('button').textContent
  //     expect(button).toBe('Increment')
  //   })

  test('Render Test with testing-library', () => {
    render(<Counter />)

    screen.getByText(/my counter/i)
    screen.getByText(/increment/i)

    const value = screen.getByTestId('counter-value').textContent

    expect(value).toBe('0')
  })

  test('Action test with testing-library', () => {
    render(<Counter />)
    const button = screen.getByText(/increment/i)

    const value = screen.getByTestId('counter-value')

    expect(value.textContent).toBe('0')

    userEvent.click(button)
    userEvent.click(button)
    userEvent.click(button)
    userEvent.click(button)

    expect(value.textContent).toBe('4')
  })
})
