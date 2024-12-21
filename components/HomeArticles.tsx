import React from 'react'
import Card from '@/components/Card'
import Link from 'next/link'
import { siteConfig } from '@/site.config'
import type { NextPage } from 'next'
import { IndexProps } from '@/types/types'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

const HomeArticles: NextPage<IndexProps> = ({ pages }) => {
  const customAnimate = useCustomAnimation()
  return (
    <div className='w-full h-auto flex flex-col mt-36'>
      <SectionTitle title={siteConfig.articleList} />
      <motion.div
        variants={customAnimate.scrollFadeInFromBottom}
        initial={customAnimate.scrollFadeInFromBottom.initial}
        whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
        viewport={customAnimate.scrollFadeInFromBottom.viewport}
        className='text-center mt-8 md:mt-12'
      >
        <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-8'>
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
        className='mt-8 mx-auto'
      >
        <Link href={'/articles'} scroll={false}>
          <motion.button
            className='py-2 px-4 rounded-full cursor-pointer bg-slate-700 text-white hover:shadow-[0px_0px_10px_0px_#17afc6]'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <p className='text-sm'>記事をもっと見る</p>
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}

export default HomeArticles
