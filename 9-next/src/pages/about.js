import Head from 'next/head'
import Main from 'layouts/Main'

export default function About () {
  const color = 'green'

  return (
    <Main>
      <Head>
        <title>NextJS | About us</title>
      </Head>
      <h2>About us</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse
        quos sunt perspiciatis Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Doloribus esse quos sunt perspiciatisLorem, ipsum
        dolor sit amet consectetur adipisicing elit. Doloribus esse quos sunt
        perspiciatis
      </p>
      <style jsx>{`
        h2 {
          color: ${color};
        }
        p {
          color: aqua;
          padding: 10px;
        }
      `}</style>
    </Main>
  )
}
