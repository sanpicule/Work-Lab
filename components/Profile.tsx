'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/site.config'
import Image from 'next/image'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import SectionTitle from './SectionTitle'

const Profile = () => {
  const customAnimate = useCustomAnimation()

  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Express',
    'Python',
    'FastAPI',
    'SQL',
    'Git',
    'Docker',
    'Figma',
  ]

  // スキルをタイプ別に分類
  const skillCategories = [
    {
      type: 'フロントエンド',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
    },
    {
      type: 'バックエンド',
      skills: ['FastAPI', 'Python'],
    },
    {
      type: 'データベース',
      skills: ['SQL', 'Prisma'],
    },
    {
      type: 'BaaS',
      skills: ['Supabase'],
    },
    {
      type: 'CMS',
      skills: ['WordPress'],
    },
    {
      type: 'インフラ・ツール',
      skills: ['Docker', 'Git'],
    },
    {
      type: 'AIツール',
      skills: ['Cursor', 'GitHub Copilot'],
    },
    {
      type: 'デザイン',
      skills: ['Figma'],
    },
  ]

  return (
    <div className='relative w-full bg-white px-2 md:px-40 py-16 md:py-32'>
      <SectionTitle title='About Me' />
      <div className='container mx-auto px-4 py-12'>
        <motion.div
          variants={customAnimate.scrollFadeInFromBottom}
          initial={customAnimate.scrollFadeInFromBottom.initial}
          whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
          viewport={customAnimate.scrollFadeInFromBottom.viewport}
          className='max-w-4xl mx-auto'
        >
          <div className='grid md:grid-cols-3 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='md:col-span-1 flex justify-center items-center'
            >
              <div className='relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg'>
                <Image
                  src='/profile.jpeg'
                  alt='プロフィール画像'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='md:col-span-2 space-y-6 flex flex-col items-center text-center'
            >
              <div>
                <h2 className='text-3xl font-bold text-gray-800 mb-2'>
                  Sanshiro Hikawa
                </h2>
                <p className='text-gray-600 mb-4'>
                  フロントエンドエンジニア／Webアプリ開発経験
                </p>
                <ul className='text-gray-700 text-sm space-y-2'>
                  <li>
                    <span className='font-semibold'>
                      社内情報管理システム開発
                    </span>
                    （2023年5月～現在）
                    <br />
                    Next.js/React・TypeScript・Prisma・PostgreSQL
                  </li>
                  <li>
                    <span className='font-semibold'>
                      アレルギー管理アプリ開発
                    </span>
                    （2022年12月～2024年1月）
                    <br />
                    FastAPI・React・Material UI・MySQL
                  </li>
                </ul>
                <div className='mt-4'>
                  <a
                    href='/about'
                    className='inline-block px-6 py-2 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition-colors'
                  >
                    詳しい経歴を見る
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className='mt-20'>
            <SectionTitle title='My Skills' />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
              {skillCategories.map((category, idx) => (
                <div key={idx} className='bg-gray-50 rounded-lg shadow p-2 md:p-6'>
                  <h3 className='text-lg font-bold text-gray-800 mb-4'>
                    {category.type}
                  </h3>
                  <ul className='flex flex-wrap gap-2'>
                    {category.skills.map((skill, i) => (
                      <li
                        key={i}
                        className='bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium'
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Profile
