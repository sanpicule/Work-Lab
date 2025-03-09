import Image from 'next/image'
import React from 'react'
import { siteConfig } from '@/site.config'
import { SnsIcons } from './SnsIcons'
import { motion } from 'framer-motion'
import useCustomAnimation from '../hooks/useCustomAnimation'
import SectionTitle from './SectionTitle'

const Profile = () => {
  const customAnimate = useCustomAnimation()
  return (
    <div className='w-full h-auto flex flex-col justify-center mt-12 p-8 md:px-20 max-w-6xl'>
      <SectionTitle title={siteConfig.profile} />
      <motion.div
        variants={customAnimate.scrollFadeInFromBottom}
        initial={customAnimate.scrollFadeInFromBottom.initial}
        whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
        viewport={customAnimate.scrollFadeInFromBottom.viewport}
        className='md:flex w-full mt-8 md:mt-12 gap-12 items-start justify-between'
      >
        <div className='w-full md:w-[40%]'>
          <Image
            className='w-full max-w-screen-lg grayscale rounded-lg'
            src='/profile.jpeg'
            alt=''
            width={400}
            height={300}
          />
        </div>
        <div className='text-left w-full mt-4 md:mt-0 md:w-1/2'>
          <p className='text-[36px] md:text-[48px]'>檜皮三四朗</p>
          <p className='mt-2 md:text-[16px]'>1997年1月4日 生まれ</p>
          <p className='mt-4 md:text-[16px]'>
            2020年にジュピターテレコム株式会社へ新卒入社。2022年8月から株式会社Gizumoに転職し、自治体向けサービス開発に参画。要件定義からテストまでの各工程を経験。現在TLとして新人育成やチーム管理を兼任。エンジニア歴3年目
          </p>
          <SnsIcons />
        </div>
      </motion.div>
    </div>
  )
}

export default Profile
