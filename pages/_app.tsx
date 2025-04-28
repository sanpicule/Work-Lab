import { useState } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Preloader from '@/components/Preloader'

export default function App({ Component, pageProps, router }: AppProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <Head>
        <title>Hikawa's Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {isLoading && <Preloader setIsLoading={setIsLoading} />}
      {!isLoading && (
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      )}
    </>
  )
}
