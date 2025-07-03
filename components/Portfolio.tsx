'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/site.config'
import { portfolioList } from '@/utils/data'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import SectionTitle from './SectionTitle'
import ClickHereButton from './ClickHereButton'

const Portfolio = () => {
  const customAnimate = useCustomAnimation()

  return (
    <div
      id='portfolio'
      className='relative w-full min-h-screen bg-white px-2 md:px-40 py-10 md:py-32'
    >
      <SectionTitle title={siteConfig.portfolio} />
      <div className='w-full px-2 py-8 md:px-4 md:py-12'>
        <motion.div
          variants={customAnimate.scrollFadeInFromBottom}
          initial={customAnimate.scrollFadeInFromBottom.initial}
          whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
          viewport={customAnimate.scrollFadeInFromBottom.viewport}
          className='max-w-6xl mx-auto'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {portfolioList.map((portfolio, index) => (
              <div
                key={index}
                className='group relative mt-8 bg-gray-50 p-6 rounded-lg shadow-md flex flex-col h-full items-center text-center'
              >
                <div className='relative w-full h-48 rounded-lg overflow-hidden mb-4'>
                  <Image
                    src={portfolio.image}
                    alt={portfolio.title}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg'
                  />
                </div>

                <h3 className='text-xl font-bold mb-2 text-gray-800'>
                  {portfolio.title}
                </h3>

                <p className='text-gray-600 text-sm mb-4 flex-grow'>
                  {portfolio.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-4 justify-center'>
                  {portfolio.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className='text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='mt-auto'>
                  <Link
                    href={`/portfolio/${portfolio.id}`}
                    scroll={false}
                    legacyBehavior
                  >
                    <a>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='inline-block'
                      >
                        <ClickHereButton text='詳細を見る' />
                      </motion.div>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio
