import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todos from './Todos'

describe('Todos testing', () => {
  test('Test add todo', () => {
    render(<Todos />)

    const firstTodo = 'First Todo'

    const input = screen.getByPlaceholderText('Todo')
    const button = screen.getByText('Add todo')

    fireEvent.change(input, { target: { value: firstTodo } })
    fireEvent.click(button)

    screen.getByText(firstTodo)
  })

  test('Test add todo with user event', () => {
    render(<Todos />)

    const input = screen.getByPlaceholderText('Todo')
    const button = screen.getByText('Add todo')
    const list = screen.getByTestId('todo-list')

    expect(list.childNodes.length).toBe(0)

    const firstTodo = 'First Todo'

    userEvent.type(input, firstTodo)
    userEvent.click(button)

    screen.getByText(firstTodo)

    expect(list.childNodes.length).toBe(1)

    const secondTodo = 'Second todo'

    userEvent.type(input, secondTodo)
    userEvent.click(button)

    screen.getByText(secondTodo)

    expect(list.childNodes.length).toBe(2)

    userEvent.click(button)
    userEvent.click(button)
    userEvent.click(button)
    userEvent.click(button)
    userEvent.click(button)

    expect(list.childNodes.length).toBe(2)
  })
})
