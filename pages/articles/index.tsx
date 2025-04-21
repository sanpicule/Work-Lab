'use client'

import type { GetStaticProps, NextPage } from 'next'
import Card from '../../components/Card'
import { siteConfig } from '../../site.config'
import { IndexProps } from '../../types/types'
import { fetchPages } from '../../utils/notion'
import SectionTitle from '@/components/SectionTitle'
import { useEffect } from 'react'
import Image from 'next/image'

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

        <div className='mt-4 ml-auto'>
          <a
            href='https://zenn.dev/sanpi34'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white shadow-lg hover:bg-white/20 transition duration-300'
          >
            <Image
              src='/zenn_logo.svg'
              alt='Zenn Logo'
              width={20}
              height={20}
              className='w-5 h-5 object-contain'
            />
            <span className='text-sm font-medium'>Zennでも記事を見る</span>
          </a>
        </div>

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
