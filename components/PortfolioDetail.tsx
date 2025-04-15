import { Portfolio } from '@/types/types'
import React from 'react'
import { FadeUp } from './FadeUp'

const PortfolioDetail: React.FC<Portfolio> = ({ title, skills }) => {
  return (
    <>
      <div className='w-full h-auto flex flex-col justify-center py-4 px-8 md:px-20 max-w-6xl'>
        <h1>{title}</h1>
        {skills.map((skill, i) => (
          <p key={i}>{skill}</p>
        ))}
      </div>
      <div className='bg-[#f8f5f0] text-[#333] font-serif'>
        <section className='text-center py-20'>
          <FadeUp>
            <h1 className='text-4xl mb-2'>Welcome to My Portfolio</h1>
            <p className='text-lg text-[#666]'>技術と自然をつなぐ UI の世界</p>
          </FadeUp>
        </section>

        <section className='px-4 py-16 max-w-3xl mx-auto space-y-12'>
          <FadeUp>
            <h2 className='text-2xl'>制作概要</h2>
            <p>React × TailwindCSS をベースにした紹介ページです。</p>
          </FadeUp>

          <FadeUp>
            <h2 className='text-2xl'>使用技術</h2>
            <ul className='list-disc ml-6 text-[#555]'>
              <li>React</li>
              <li>TailwindCSS</li>
              <li>Framer Motion</li>
            </ul>
          </FadeUp>
        </section>
      </div>
    </>
  )
}

export default PortfolioDetail
