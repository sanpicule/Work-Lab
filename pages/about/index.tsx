import React from 'react'
import Head from 'next/head'
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa'

const experiences = [
  {
    title: '社内情報管理システム開発（大手SIer案件）',
    period: '2025年1月 ～ 現在',
    role: 'フロントエンド開発／API設計・実装／DB設計',
    team: '最大10名',
    details: [
      'Next.js／Reactによる新規画面・再利用画面のUI実装',
      'Chakra UI, Material UIを用いたUI設計',
      'Prisma／PostgreSQLによるDB設計・構築',
      'Jest／Playwrightによるテスト自動化',
      '要件定義～運用保守まで一貫して担当',
    ],
    tech: 'TypeScript, React, Next.js, Chakra UI, Material UI, Prisma, PostgreSQL, Playwright, Docker, Git, GitHub',
    icon: <FaBriefcase size={22} className='text-gray-800' />,
    accent: 'from-gray-900 to-gray-500',
  },
  {
    title: 'アレルギー管理アプリケーション開発',
    period: '2022年12月 ～ 2024年12月',
    role: 'フロントエンド・バックエンド開発／API設計・実装',
    team: '最大12名',
    details: [
      'FastAPI／ReactによるAPI・画面実装',
      'Material UIによるUI設計',
      'SQLAlchemy／MySQLによるDB設計・構築',
      'テストコード・ドキュメント作成',
      '要件定義～運用保守まで担当',
    ],
    tech: 'TypeScript, JavaScript, Python, React, FastAPI, Material UI, SQLAlchemy, MySQL, Docker, Git, GitHub',
    icon: <FaLaptopCode size={22} className='text-gray-800' />,
    accent: 'from-gray-700 to-gray-400',
  },
]

const skills = [
  'TypeScript',
  'JavaScript',
  'Python',
  'SQL',
  'React',
  'Next.js',
  'FastAPI',
  'Material UI',
  'Chakra UI',
  'Prisma',
  'SQLAlchemy',
  'MySQL',
  'PostgreSQL',
  'Docker',
  'Git',
  'GitHub',
  'Playwright',
  'ESLint',
  'Vercel',
]

const About = () => {
  return (
    <>
      <Head>
        <title>経歴詳細 | Sanshiro Hikawa</title>
      </Head>
      <main className='max-w-3xl mx-auto px-4 py-36 md:py-48'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-20 text-center tracking-tight drop-shadow-xl'>
          About
        </h1>
        <section className='mb-20 relative'>
          {/* Timeline Line（SP非表示） */}
          <div className='hidden md:block absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100 rounded-full z-0' />
          <div className='space-y-24'>
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className='relative flex flex-col md:flex-row items-start gap-0 md:gap-14'
              >
                {/* Timeline Node（SP非表示） */}
                <div className='hidden md:flex z-10 flex-col items-center min-w-[48px]'>
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.accent} border-4 border-white shadow-2xl flex items-center justify-center mb-2 animate-pulse`}
                  >
                    {exp.icon}
                  </div>
                  {idx !== experiences.length - 1 && (
                    <div
                      className='flex-1 w-1 bg-gradient-to-b from-gray-400 to-gray-100'
                      style={{ minHeight: 40 }}
                    />
                  )}
                </div>
                {/* Card */}
                <div className='flex-1 bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10 relative group transition-transform duration-300 hover:-translate-y-2 hover:shadow-3xl'>
                  <div className='flex flex-wrap items-center gap-4 mb-3'>
                    <span className='text-xs bg-gray-900 text-white rounded-full px-4 py-1 font-bold tracking-widest shadow'>
                      {exp.period}
                    </span>
                    <span className='text-xs text-gray-500 font-semibold'>
                      {exp.role}
                    </span>
                    <span className='text-xs text-gray-400'>{exp.team}</span>
                  </div>
                  <h2 className='text-xl md:text-2xl font-extrabold text-gray-800 mb-3 tracking-tight group-hover:text-gray-900 transition-colors'>
                    {exp.title}
                  </h2>
                  <ul className='list-disc pl-6 text-gray-700 mb-3 space-y-1'>
                    {exp.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                  <div className='text-xs text-gray-500 mt-2'>
                    主な技術:{' '}
                    <span className='font-mono text-gray-700'>{exp.tech}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default About
