import Counter from './Counter'
import Todos from './Todos'
import Post from './Post'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <Post />
        <hr />
        <Todos />
        <hr />
        <Counter />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
