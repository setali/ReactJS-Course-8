import axios from 'axios'
import Link from 'next/link'
import Main from 'layouts/Main'

export default function Users ({ users }) {
  return (
    <Main>
      <h3>Users list</h3>
      <ol>
        {users.map(user => (
          <Link key={user.id} href={`/user/${user.id}`}>
            <a>
              <li key={user.id}>{user.name}</li>
            </a>
          </Link>
        ))}
      </ol>
    </Main>
  )
}

export async function getStaticProps () {
  console.log('getStaticProps')
  const url = 'https://jsonplaceholder.typicode.com/users'
  const { data } = await axios(url)

  const users = data.map(el => ({ id: el.id, name: el.name }))

  return {
    props: {
      users
    },
    revalidate: 5 // Seconds
  }
}
