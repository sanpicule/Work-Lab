import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { siteConfig } from '@/site.config'
import { portfolioList } from '@/utils/data'
import { motion } from 'framer-motion'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import SectionTitle from './SectionTitle'

function Portfolio() {
  const customAnimate = useCustomAnimation()
  return (
    <div className='w-full h-auto flex flex-col mt-36'>
      <SectionTitle title={siteConfig.portfolio} />
      <motion.div
        variants={customAnimate.scrollFadeInFromBottom}
        initial={customAnimate.scrollFadeInFromBottom.initial}
        whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
        viewport={customAnimate.scrollFadeInFromBottom.viewport}
        className='mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-12'
      >
        {portfolioList.map((portfolio) => (
          <div
            key={portfolio.id}
            className='flex flex-col items-center justify-center gap-4 rounded-2xl'
          >
            <Link href={portfolio.url} target='_blank'>
              <div className='relative transition duration-500 w-full h-full cursor-pointer overflow-hidden hover:-translate-x-2 hover:-translate-y-2 hover:shadow-2xl rounded-md'>
                <Image
                  src={portfolio.image}
                  alt=''
                  width={400}
                  height={300}
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300'></div>
              </div>
            </Link>
            <p className='text-sm'>{portfolio.title}</p>
            <Link href={`/${portfolio.id}`} scroll={false}>
              <motion.button
                className='py-2 px-4 rounded-full cursor-pointer bg-slate-700 text-white hover:shadow-[0px_0px_10px_0px_#17afc6]'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <p className='text-sm'>詳細を見る</p>
              </motion.button>
            </Link>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Portfolio
