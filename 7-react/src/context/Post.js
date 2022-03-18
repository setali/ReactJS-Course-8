import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from './request'
import ThemeContext from './ThemeContext'

export default function About () {
  const theme = useContext(ThemeContext)
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    request(`/posts/${id}`)
      .then(response => setPost(response.data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className='box' style={theme}>
      {loading ? (
        'Loading ....'
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  )
}
