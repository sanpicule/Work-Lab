'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/site.config'
import Image from 'next/image'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import PinDropIcon from '@mui/icons-material/PinDrop'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import SectionTitle from './SectionTitle'

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
    <div className='relative w-full min-h-screen bg-gradient-to-b from-transparent via-black/5 to-transparent dark:via-white/5 px-10 md:px-40 py-16 md:py-32'>
      <SectionTitle title={siteConfig.profile} />
      <div className='container mx-auto px-4 py-12'>
        <motion.div
          variants={customAnimate.scrollFadeInFromBottom}
          initial={customAnimate.scrollFadeInFromBottom.initial}
          whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
          viewport={customAnimate.scrollFadeInFromBottom.viewport}
          className='max-w-6xl mx-auto'
        >
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='space-y-8'
            >
              <div className='relative w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden border-4  border-transparent bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl'>
                <Image
                  src='/profile.jpeg'
                  alt='プロフィール画像'
                  fill
                  className='object-cover grayscale'
                />
              </div>
              <div>
                <h2 className='text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
                  SANSHIRO HIKAWA
                </h2>
                <div className='space-y-4'>
                  <div className='flex items-center gap-3 text-lg'>
                    <PinDropIcon className='text-purple-500' />
                    <p>Japan.Tokyo</p>
                  </div>
                  <div className='flex items-center gap-3 text-lg'>
                    <CalendarMonthIcon className='text-pink-500' />
                    <p>January.4th.1997</p>
                  </div>
                  <div className='flex items-center gap-3 text-lg'>
                    <TwitterIcon className='text-blue-400' />
                    <p>Sanpi</p>
                  </div>
                  <div className='flex items-center gap-3 text-lg'>
                    <GitHubIcon className='text-gray-800 dark:text-gray-200' />
                    <p>sanpicule</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='space-y-8'
            >

              <div className='space-y-6'>
                <h3 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
                  Skills
                </h3>
                <div className='flex flex-wrap gap-3'>
                  {[
                    'React',
                    'Next.js',
                    'TypeScript',
                    'Node.js',
                    'MySQL',
                    'PostgreSQL',
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className='px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full text-sm backdrop-blur-sm border border-purple-500/20'
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className='space-y-6'>
                <h3 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
                  Timeline
                </h3>
                <div className='space-y-6'>
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className='relative pl-8 border-l-2 border-purple-500/20'
                    >
                      <div className='absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500' />
                      <div className='space-y-2'>
                        <p className='text-purple-500 font-medium'>
                          {item.year}
                        </p>
                        <h4 className='text-lg font-semibold'>{item.title}</h4>
                        {item.subtitle.map((text, i) => (
                          <p
                            key={i}
                            className='text-[#eee]/80 dark:text-gray-400'
                          >
                            {text}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Profile
