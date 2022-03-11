import { useState } from 'react'

export default function TodosUseState () {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  function getId () {
    return todos.length ? todos[todos.length - 1].id + 1 : 1
  }

  function addTodo (e) {
    e.preventDefault()
    setTodos(todos => [...todos, { title: todo, id: getId() }])
    setTodo('')
  }

  function removeTodo (id) {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type='text'
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      <ol>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} - {todo.id}
            <span
              onClick={() => removeTodo(todo.id)}
              style={{ padding: '5px', color: 'red', cursor: 'pointer' }}
            >
              x
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
