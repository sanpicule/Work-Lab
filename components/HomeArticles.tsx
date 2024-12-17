import React from 'react'
import Card from '@/components/Card'
import Link from 'next/link'
import { siteConfig } from '@/site.config'
import type { NextPage } from 'next'
import { IndexProps } from '@/types/types'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import { motion } from 'framer-motion'

const HomeArticles: NextPage<IndexProps> = ({ pages }) => {
  const customAnimate = useCustomAnimation()
  return (
    <div className='w-full h-auto flex flex-col mt-36'>
      <motion.div
        variants={customAnimate.scrollFadeInFromTop}
        initial={customAnimate.scrollFadeInFromTop.initial}
        whileInView={customAnimate.scrollFadeInFromTop.whileInView}
        viewport={customAnimate.scrollFadeInFromTop.viewport}
        className='flex items-center gap-4'
      >
        <span className='w-12 h-[1px] bg-slate-700'></span>
        <p className='text-[24px] md:text-[36px]'>{siteConfig.articleList}</p>
      </motion.div>
      <motion.div
        variants={customAnimate.scrollFadeInFromBottom}
        initial={customAnimate.scrollFadeInFromBottom.initial}
        whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
        viewport={customAnimate.scrollFadeInFromBottom.viewport}
        className='text-center mt-4 md:mt-12'
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
        className='ml-auto mt-8'
      >
        <Link href={'/articles'} scroll={false}>
          <motion.button
            className='w-[200px] h-[50px] rounded-full cursor-pointer bg-[#56828C] text-white hover:shadow-[0px_0px_10px_0px_#17afc6]'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            記事をもっと見る
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}

export default HomeArticles
