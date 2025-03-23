import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { siteConfig } from '@/site.config'
import { portfolioList } from '@/utils/data'
import { motion } from 'framer-motion'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import SectionTitle from './SectionTitle'
import { caveat } from '@/utils/font'

function Portfolio() {
  const customAnimate = useCustomAnimation()
  return (
    <div className='w-full mt-4 py-20'>
      <div className='max-w-6xl mx-auto w-full h-auto flex flex-col rounded-[40px] px-8 md:py-40 md:px-20'>
        <div className='text-white border-b-2 border-[#17afc6]'>
          <SectionTitle title={siteConfig.portfolio} />
        </div>
        <motion.div
          variants={customAnimate.scrollFadeInFromBottom}
          initial={customAnimate.scrollFadeInFromBottom.initial}
          whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
          viewport={customAnimate.scrollFadeInFromBottom.viewport}
          className='mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-24'
        >
          {portfolioList.map((portfolio, i) => (
            <div
              key={portfolio.id}
              className='flex flex-col justify-center gap-2 rounded-2xl text-white'
            >
              <p className={`${caveat.className} text-4xl font-bold`}>{i + 1}. {portfolio.title}</p>
              <Link href={portfolio.url} target='_blank' className='w-full h-full bg-slate-100 p-4 rounded-md'>
                <div className='relative transition duration-500 w-full h-full cursor-pointer overflow-hidden hover:shadow-2xl rounded-md'>
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
              <Link href={`/${portfolio.id}`} scroll={false} className='text-center mt-4'>
                <motion.button
                  className='py-2 px-8 rounded-md cursor-pointer bg-[#17afc6] hover:shadow-[0px_0px_10px_0px_#fff]'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <p className='text-sm text-white font-bold'>詳細を見る</p>
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
