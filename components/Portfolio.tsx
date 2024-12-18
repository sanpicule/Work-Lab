import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { siteConfig } from '@/site.config'
import { portfolioList } from '@/utils/data'
import { motion } from 'framer-motion'
import useCustomAnimation from '@/hooks/useCustomAnimation'

function Portfolio() {
  const customAnimate = useCustomAnimation()
  return (
    <div className='w-full h-auto flex flex-col mt-36'>
      <motion.div
        variants={customAnimate.scrollFadeInFromTop}
        initial={customAnimate.scrollFadeInFromTop.initial}
        whileInView={customAnimate.scrollFadeInFromTop.whileInView}
        viewport={customAnimate.scrollFadeInFromTop.viewport}
        className='flex items-center justify-end gap-4'
      >
        <p className='text-[24px] md:text-[36px]'>{siteConfig.portfolio}</p>
        <span className='w-12 h-[1px] bg-slate-700'></span>
      </motion.div>
      <motion.div
        variants={customAnimate.scrollFadeInFromBottom}
        initial={customAnimate.scrollFadeInFromBottom.initial}
        whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
        viewport={customAnimate.scrollFadeInFromBottom.viewport}
        className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-12'
      >
        {portfolioList.map((portfolio) => (
          <div
            key={portfolio.id}
            className='flex flex-col items-center justify-center gap-4 border border-slate-700 p-4 rounded-2xl'
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
            <Link href={`/${portfolio.id}`}>
              <motion.div
                whileHover={{
                  scale: [1, 1.2, 0.9, 1.05, 1],
                }}
                transition={{
                  duration: 0.6,
                  ease: 'easeInOut',
                }}
                whileTap={{ scale: 0.95 }}
                className='inline-block'
              >
                <button className='px-4 py-2 mt-4 rounded-lg border border-slate-700 shadow-md hover:bg-slate-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-700 text-base font-semibold group'>
                  <p className='text-sm group-hover:text-white'>詳細を見る</p>
                </button>
              </motion.div>
            </Link>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Portfolio
