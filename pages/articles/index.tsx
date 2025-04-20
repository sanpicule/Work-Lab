'use client'

import type { GetStaticProps, NextPage } from 'next'
import Card from '../../components/Card'
import { siteConfig } from '../../site.config'
import { IndexProps } from '../../types/types'
import { fetchPages } from '../../utils/notion'
import SectionTitle from '@/components/SectionTitle'
import { useEffect } from 'react'

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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className='w-full h-auto my-36 md:my-48 flex flex-col mx-auto justify-center py-4 px-8 md:px-20 max-w-6xl'>
        <SectionTitle title={siteConfig.articleList} />
        <div className='grid grid-cols-1 gap-3 md:gap-12 lg:gap-10 mt-8 w-full'>
          {/* Card */}
          {pages.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
