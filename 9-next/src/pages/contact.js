import Head from 'next/head'
// import { useEffect } from 'react'
import Main from 'layouts/Main'
import styles from 'styles/contact.module.css'

export default function Contact () {
  // useEffect(() => {
  //   throw Error('Client Error Testing')
  // }, [])

  return (
    <Main>
      <Head>
        <title>NextJS | Contact us</title>
      </Head>
      <h2 className={styles.header}>Contact us</h2>
      <p className={styles.paragraph}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse
        quos sunt perspiciatis tempora nesciunt. Soluta amet facere nesciunt
        nobis hic quod, voluptate vitae temporibus veritatis aliquam quidem
        eveniet et.
      </p>
    </Main>
  )
}
