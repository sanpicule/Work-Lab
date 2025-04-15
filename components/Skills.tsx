import React from 'react'
import { siteConfig } from '@/site.config'
import { motion } from 'framer-motion'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import SectionTitle from './SectionTitle'
import Image from 'next/image'

export const Skills = () => {
  const customAnimate = useCustomAnimation()

  return (
    <div className='w-[90%] md:w-full py-16 md:py-24 flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-20 md:max-w-7xl mx-auto'>
      <SectionTitle title={siteConfig.language} />
      <motion.div
        variants={customAnimate.scrollFadeInFromBottom}
        initial={customAnimate.scrollFadeInFromBottom.initial}
        whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
        viewport={customAnimate.scrollFadeInFromBottom.viewport}
        className='grid grid-cols-1 md:grid-cols-1 gap-12 mt-8 md:mt-12'
      >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 px-2 text-[#eee] mx-auto'>
          <div className='w-full aspect-square'>
            <Image
              className='object-cover h-full w-full brightness-50 hover:brightness-100 duration-300'
              src={'/webapp.jpg'}
              alt=''
              width={300}
              height={300}
              
            />
            <p className='mt-2 font-bold'>Web Application</p>
            <p>TypeScriptとNextJSによる高性能で堅牢なWebアプリケーション開発。SPAからデータ処理まで幅広く対応します。</p>
          </div>
          <div className='w-full aspect-square'>
            <Image
              className='object-cover h-full w-full brightness-50 hover:brightness-100 duration-300'
              src={'/website.jpg'}
              alt=''
              width={400}
              height={225}
            />
            <p className='mt-2 font-bold'>Website</p>
            <p>SEO対策とレスポンシブ設計を重視した企業サイト制作。NextJSの速さで集客力のあるサイトを構築します。</p>
          </div>
          <div className='w-full aspect-square'>
            <Image
              className='object-cover h-full w-full brightness-50 hover:brightness-100 duration-300'
              src={'/design.jpg'}
              alt=''
              width={400}
              height={225}
            />
            <p className='mt-2 font-bold'>Web Design</p>
            <p>TailwindCSSとFigmaで機能性と美しさを両立したUIデザイン。ブランドに合わせた独自のWebデザインを提供。</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
