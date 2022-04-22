import Main from 'layouts/Main'
// import { useRouter } from 'next/router'
import axios from 'axios'

export default function Post ({ post }) {
  //   const {
  //     query: { id }
  //   } = useRouter()

  return (
    <Main>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </Main>
  )
}

export async function getServerSideProps ({ params: { id } }) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`

  const { data: post } = await axios(url)

  if (id === '5') {
    throw Error('Custom Error test')
  }

  return {
    props: { post }
  }
}
