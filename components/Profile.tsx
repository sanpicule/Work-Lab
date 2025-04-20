import Image from 'next/image'
import React from 'react'
import { siteConfig } from '@/site.config'
import { motion } from 'framer-motion'
import useCustomAnimation from '../hooks/useCustomAnimation'
import SectionTitle from './SectionTitle'
import PinDropIcon from '@mui/icons-material/PinDrop'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'

const Profile = () => {
  const customAnimate = useCustomAnimation()
  const timeline = [
    {
      year: 'now',
      title: 'エンジニア',
      subtitle: [
        '・学校給食のアレルギー管理管理アプリ開発',
        '・大手SIerの業務改善アプリ開発',
      ],
    },
    {
      year: '2022',
      title: '営業部',
      subtitle: ['新規顧客獲得営業'],
    },
    {
      year: '2020',
      title: '',
      subtitle: [],
    },
  ]

  return (
    <div className='w-[80%] md:w-[60%] py-16 md:py-24 flex flex-col justify-center md:max-w-8xl mx-auto'>
      <SectionTitle title={siteConfig.profile} />
      <motion.div
        variants={customAnimate.scrollFadeInFromBottom}
        initial={customAnimate.scrollFadeInFromBottom.initial}
        whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
        viewport={customAnimate.scrollFadeInFromBottom.viewport}
        className='grid w-full mt-6 md:mt-8 lg:mt-12 gap-6 md:gap-8 lg:gap-24 items-start justify-between grid-cols-1 md:grid-cols-3'
      >
        {/* 1カラム目：画像 */}
        <div className='flex flex-row md:flex-col items-start md:items-center justify-start md:justify-center gap-6 md:gap-4'>
          <div className='flex flex-col items-center justify-center gap-4'>
            <div className='relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden border-4 border-white shadow-2xl'>
              <Image
                src='/profile.jpeg'
                alt='プロフィール画像'
                fill
                className='object-cover grayscale'
              />
            </div>
            <h2 className='text-xs sm:text-sm md:text-base lg:text-lg tracking-widest font-semibold flex items-center gap-2'>
              SANSHIRO HIKAWA
            </h2>
          </div>
          <div className='flex flex-col items-start justify-center gap-2 mt-4 sm:mt-0'>
            <div className='flex items-center gap-1 md:gap-2'>
              <PinDropIcon className='text-lg md:text-xl' />
              <p className='text-xs sm:text-sm'>Japan.Tokyo</p>
            </div>
            <div className='flex items-center gap-1 md:gap-2'>
              <CalendarMonthIcon className='text-lg md:text-xl' />
              <p className='text-xs sm:text-sm'>January.4th.1997</p>
            </div>
            <div className='flex items-center gap-1 md:gap-2'>
              <TwitterIcon className='text-lg md:text-xl' />
              <p className='text-xs sm:text-sm'>Sanpi</p>
            </div>
            <div className='flex items-center gap-1 md:gap-2'>
              <GitHubIcon className='text-lg md:text-xl' />
              <p className='text-xs sm:text-sm'>sanpicule</p>
            </div>
          </div>
        </div>

        {/* 2カラム目：略歴とタイムライン */}
        <div className='flex flex-col w-full gap-4 md:gap-6 text-left'>
          <p className='text-xs sm:text-sm break-words'>
            2020年に株式会社JCOMへ新卒入社。2022年8月から株式会社Gizumoに転職し、自治体向けサービス開発に参画。要件定義からテストまでの各工程を経験。現在TLとして新人育成やチーム管理を兼任。
          </p>
          <section className='w-full mt-2 md:mt-4'>
            <h2 className='text-base md:text-lg tracking-widest font-semibold mb-4 md:mb-6 flex items-center gap-2 md:gap-4'>
              EDUCATION
              <span className='flex-1 h-px bg-white'></span>
            </h2>
            <div className='relative mt-8 md:mt-12 border-l-2 border-white ml-2 pl-4 md:pl-6'>
              {timeline.map((item, index) => (
                <div key={index} className='mb-6 md:mb-8 relative'>
                  <span className='absolute -left-[32px] md:-left-[40px] -top-4 md:-top-6 text-xs md:text-sm font-medium'>
                    {item.year}
                  </span>
                  {item.title && (
                    <div>
                      <p className='text-sm md:text-base font-semibold'>
                        {item.title}
                      </p>
                      <div className='text-gray-400 space-y-1'>
                        {item.subtitle.map((line, i) => (
                          <p key={i} className='text-xs break-words'>
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 3カラム目：スキル */}
        <section className='w-full'>
          <h2 className='text-base md:text-lg tracking-widest font-semibold mb-4 md:mb-6 flex items-center gap-2 md:gap-4'>
            SKILL
            <span className='flex-1 h-px bg-white'></span>
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 text-left'>
            <div>
              <p className='text-sm md:text-base font-bold'>Frontend</p>
              <ul className='list-disc mt-1 md:mt-2 ml-4 md:ml-6 space-y-1 md:space-y-2 text-xs sm:text-sm'>
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Material UI</li>
              </ul>
            </div>
            <div>
              <p className='text-sm md:text-base font-bold'>Backend</p>
              <ul className='list-disc mt-1 md:mt-2 ml-4 md:ml-6 space-y-1 md:space-y-2 text-xs sm:text-sm'>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
              </ul>

              <p className='text-sm md:text-base font-bold mt-4 md:mt-6'>
                Others
              </p>
              <ul className='list-disc mt-1 md:mt-2 ml-4 md:ml-6 space-y-1 md:space-y-2 text-xs sm:text-sm'>
                <li>Git</li>
                <li>GitHub</li>
                <li>Docker</li>
                <li>Figma</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
              </ul>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  )
}

export default Profile
