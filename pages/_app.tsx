import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}
