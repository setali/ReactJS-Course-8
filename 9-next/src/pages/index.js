import Head from 'next/head'
import Main from 'layouts/Main'

export default function index () {
  return (
    <Main>
      <Head>
        <title>NextJS | HomePage</title>
      </Head>
      <h3>{process.env.myName}</h3>
      <div>Welcome to NextJS</div>
    </Main>
  )
}
