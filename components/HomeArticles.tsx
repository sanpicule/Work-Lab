import React from 'react'
import Card from '@/components/Card'
import Link from 'next/link'
import { siteConfig } from '@/site.config'
import type { NextPage } from 'next'
import { IndexProps } from '@/types/types'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import ClickHereButton from './ClickHereButton'

const HomeArticles: NextPage<IndexProps> = ({ pages }) => {
  const customAnimate = useCustomAnimation()
  return (
    <div className='w-[80%] py-16 md:py-24 flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-20 md:max-w-8xl mx-auto'>
      <SectionTitle title={siteConfig.articleList} />
      <motion.div
        variants={customAnimate.scrollFadeInFromBottom}
        initial={customAnimate.scrollFadeInFromBottom.initial}
        whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
        viewport={customAnimate.scrollFadeInFromBottom.viewport}
        className='text-center mt-8 md:mt-12'
      >
        <div className='grid grid-cols-1 w-full gap-2 md:gap-8'>
          {/* Card */}
          {pages.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={customAnimate.scrollFadeInFromBottom}
        initial={customAnimate.scrollFadeInFromBottom.initial}
        whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
        viewport={customAnimate.scrollFadeInFromBottom.viewport}
        className='mt-8 text-center'
      >
        <Link href={'/articles'} scroll={false}>
          <ClickHereButton text={'もっと見る'} />
        </Link>
      </motion.div>
    </div>
  )
}

export default HomeArticles
