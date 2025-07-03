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
      <div className='w-full min-h-screen py-16 md:py-32 px-4 md:px-40 mx-auto max-w-6xl'>
        <SectionTitle title={siteConfig.articleList} />
        <div className='w-full mt-6 flex justify-end'>
          <a
            href='https://zenn.dev/sanpi34'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-3 px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 shadow-sm hover:bg-gray-200 transition-all duration-300'
          >
            <div className='w-6 h-6 relative'>
              <Image
                src='/zenn_logo.svg'
                alt='Zenn Logo'
                fill
                className='object-contain'
              />
            </div>
            <span className='text-sm md:text-base font-semibold tracking-wide'>
              Zennでも記事を見る
            </span>
          </a>
        </div>

        <div className='grid grid-cols-1 gap-6 mt-8 w-full'>
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