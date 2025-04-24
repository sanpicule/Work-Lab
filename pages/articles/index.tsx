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

        <div className='w-full mt-6 ml-auto'>
          <a
            href='https://zenn.dev/sanpi34'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/30 backdrop-blur-md text-white shadow-xl hover:bg-white/20 transition-all duration-300 border border-white/10 hover:scale-[1.03]'
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
