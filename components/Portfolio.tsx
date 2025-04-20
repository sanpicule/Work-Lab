import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { siteConfig } from '@/site.config'
import { portfolioList } from '@/utils/data'
import { motion } from 'framer-motion'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import SectionTitle from './SectionTitle'
import { caveat } from '@/utils/font'
import ClickHereButton from './ClickHereButton'

function Portfolio() {
  const customAnimate = useCustomAnimation()
  return (
    <div className='w-full bg-[#eee] min-h-[100lvh]'>
      <div className='w-[80%] md:w-[60%] h-full min-h-[100lvh] py-16 md:py-24 flex flex-col justify-center md:max-w-8xl mx-auto'>
        <SectionTitle title={siteConfig.portfolio} color='black' />
        <motion.div
          variants={customAnimate.scrollFadeInFromBottom}
          initial={customAnimate.scrollFadeInFromBottom.initial}
          whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
          viewport={customAnimate.scrollFadeInFromBottom.viewport}
          className='mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8'
        >
          {portfolioList.map((portfolio, i) => (
            <div
              key={portfolio.id}
              className='flex flex-col justify-center gap-2 rounded-2xl text-[#2e2e2e]'
            >
              <p className={`${caveat.className} text-4xl font-bold`}>
                {i + 1}. {portfolio.title}
              </p>
              <Link
                href={portfolio.url}
                target='_blank'
                className='w-full h-full p-4 rounded-md'
              >
                <div className='relative transition duration-500 w-full h-full cursor-pointer overflow-hidden rounded-md'>
                  <Image
                    src={portfolio.image}
                    alt=''
                    width={400}
                    height={300}
                    className='w-full h-full object-cover'
                  />
                </div>
              </Link>
              <div>
                <Link
                  href={`/${portfolio.id}`}
                  scroll={false}
                  className='text-center mt-4'
                >
                  <ClickHereButton text='詳細を見る' bgcolor={'white'} />
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio
