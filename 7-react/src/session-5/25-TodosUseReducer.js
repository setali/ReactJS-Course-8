import { useReducer, useState } from 'react'

function getId (todos) {
  return todos.length ? todos[todos.length - 1].id + 1 : 1
}

function reducer (state, { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return [...state, { title: payload, id: getId(state) }]

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== payload)

    default:
      return state
  }
}

export default function TodosUseState () {
  const [todos, dispatch] = useReducer(reducer, [])
  const [todo, setTodo] = useState('')

  function addTodo (e) {
    e.preventDefault()
    dispatch({ type: 'ADD_TODO', payload: todo })
    setTodo('')
  }

  function removeTodo (id) {
    dispatch({ type: 'REMOVE_TODO', payload: id })
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
