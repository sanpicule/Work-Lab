import type { NextPage, GetStaticProps } from 'next'
import Hero from '@/components/Hero'
import { siteConfig } from '@/site.config'
import Portfolio from '@/components/Portfolio'
import Profile from '@/components/Profile'
import ZennSection from '@/components/ZennSection'
import { fetchZennArticlesServer, ZennArticle } from '@/utils/zenn'

interface HomeProps {
  zennArticles: ZennArticle[]
}

const Home: NextPage<HomeProps> = ({ zennArticles }) => {
  return (
    <>
      <Hero title={siteConfig.title} />
      <Profile />
      <Portfolio />
      <ZennSection articles={zennArticles} username={siteConfig.zennUsername} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const zennArticles = await fetchZennArticlesServer(siteConfig.zennUsername)
  return {
    props: {
      zennArticles,
    },
    revalidate: 3600, // 1時間ごとに再生成
  }
}

export default Home
