'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/site.config'
import { portfolioList } from '@/utils/data'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import SectionTitle from './SectionTitle'
import { caveat } from '@/utils/font'
import ClickHereButton from './ClickHereButton'

const Portfolio = () => {
  const customAnimate = useCustomAnimation()

  return (
    <div className='relative w-full min-h-screen bg-gradient-to-b from-transparent via-[#5f5f5f]/50 to-transparent px-10 md:px-40'>
      <SectionTitle title={siteConfig.portfolio} />
      <div className='container mx-auto px-4 py-12'>
        <motion.div
          variants={customAnimate.scrollFadeInFromBottom}
          initial={customAnimate.scrollFadeInFromBottom.initial}
          whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
          viewport={customAnimate.scrollFadeInFromBottom.viewport}
          className='max-w-6xl mx-auto'
        >
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {portfolioList.map((portfolio, index) => (
              <div className='group relative mt-8'>
                {/* 背景グラデーション */}
                <div className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0' />

                {/* 画像コンテナ */}
                <div className='relative w-full rounded-xl overflow-hidden z-10'>
                  <Image
                    src={portfolio.image}
                    alt={portfolio.title}
                    width={800}
                    height={600}
                    className='rounded-xl w-full h-auto object-contain'
                  />
                </div>

                {/* タイトル */}
                <h3
                  className={`${caveat.className} text-3xl font-bold mb-4 text-center bg-clip-text text-[#eee] z-10`}
                >
                  {portfolio.title}
                </h3>

                {/* ボタン */}
                <div className='flex justify-center z-10'>
                  <Link href={`/${portfolio.id}`} scroll={false}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ClickHereButton text='詳細を見る' />
                    </motion.div>
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
