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
    <div className='w-full mt-4 py-20 bg-[#2e2e2e] shadow-[0px_0px_20px_0px_#000]'>
      <div className='max-w-6xl mx-auto w-full h-auto flex flex-col rounded-[40px] py-8 px-8 md:py-40 md:px-20'>
        <div className='text-white border-b-2 border-[#17afc6]'>
          <SectionTitle title={siteConfig.portfolio} />
        </div>
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
              className='flex flex-col items-center justify-center gap-4 rounded-2xl text-white'
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
                  className='py-2 px-4 rounded-full cursor-pointer bg-white hover:shadow-[0px_0px_10px_0px_#17afc6]'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <p className='text-sm text-[#202022]'>詳細を見る</p>
                </motion.button>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio
