import { useEffect, useState } from 'react'
import Main from '../../layouts/Main'
// import axios from 'axios'
import Link from 'next/link'

export default function Posts ({ posts }) {
  //   console.log('CSR', posts.length)
  //   const [posts, setPosts] = useState([])

  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then(response => response.json())
  //       .then(data => setPosts(data))
  //   }, [])

  return (
    <Main>
      <h2>Posts list</h2>
      <ol>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </Main>
  )
}

export async function getServerSideProps () {
  console.log('getServerSideProps')
  const url = 'https://jsonplaceholder.typicode.com/posts'

  //   const { data: posts } = await axios(url)

  const response = await fetch(url)
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
