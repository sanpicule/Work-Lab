import type { GetStaticProps, NextPage } from 'next'
import Card from '../../components/Card'
import Layout from '../../components/Layout'
import { siteConfig } from '../../site.config'
import { IndexProps } from '../../types/types'
import { fetchPages } from '../../utils/notion'
import SectionTitle from '@/components/SectionTitle'

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({})
  return {
    props: {
      pages: results ? results : [],
    },
    revalidate: 10,
  }
}

const Home: NextPage<IndexProps> = ({ pages }) => {
  return (
    <Layout>
      <div className='pt-12 text-center w-full'>
        <SectionTitle title={siteConfig.articleList} />
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-10 mt-8 w-full my-12'>
          {/* Card */}
          {pages.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home
