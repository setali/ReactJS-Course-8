import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NextNProgress from 'nextjs-progressbar'
// import random from 'lodash/random'
import 'styles/global.css'
import Random from 'cmp/Random'

function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true))
    router.events.on('routeChangeComplete', () => setLoading(false))
  }, [])

  return (
    <div>
      {loading && 'Loading ....'}
      <Random />
      <NextNProgress
        color='#29D'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
