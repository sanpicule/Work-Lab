import Image from 'next/image'
import React from 'react'
import { siteConfig } from '@/site.config'
import { SnsIcons } from './SnsIcons'

const Profile = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center mt-24'>
      <div className='flex items-center gap-4'>
        <span className='w-12 h-[1px] bg-slate-700'></span>
        <p className='text-[24px] md:text-[36px]'>
          {siteConfig.profile}
        </p>
      </div>
      <div className='md:flex w-full mt-8 md:mt-12 gap-12 items-start justify-around'>
        <div className='w-full md:w-[50%]'>
          <Image
            className="w-full max-w-screen-lg grayscale"
            src='/profile.jpeg'
            alt=""
            width={400}
            height={300}
          />
        </div>
        <div className='text-left w-full mt-4 md:mt-0 md:w-1/2'>
          <p className='text-[36px] md:text-[48px] italic'>
            H.Sanshiro
          </p>
          <p className='mt-2 md:text-[16px]'>1997年1月4日 生まれ</p>
          <p className='mt-4 md:text-[16px]'>2020年にジュピターテレコム株式会社へ新卒入社。2022年8月から株式会社Gizumoに転職し、自治体向けサービス開発に参画。要件定義からテストまでの各工程を経験。現在TLとして新人育成やチーム管理を兼任。エンジニア歴3年目</p>
          <SnsIcons />
        </div>
      </div>
    </div>
  )
}

export default Profile
