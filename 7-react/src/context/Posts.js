import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import request from './request'
import ThemeContext from './ThemeContext'

export default function Posts () {
  const theme = useContext(ThemeContext)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    request('/posts').then(response => setPosts(response.data))
  }, [])

  return (
    <div className='box' style={theme}>
      <h2>Post list</h2>
      <ol>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
