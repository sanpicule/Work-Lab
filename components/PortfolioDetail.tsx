// Refactored and stylish PortfolioDetail component
import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'
import { motion } from 'framer-motion'

export interface PortfolioDetailProps {
  link: string
  image: string
  spImage: string
  portfolioTitle: string
  period: string
  numberOf: number
  overview: string
  processInfoList: ProcessInfoListType[]
  summary: string
}

export interface ProcessInfoListType {
  title: string
  image: string
  description: string
  tools: ToolType[]
}

export interface ToolType {
  title: string
  items: string[]
}

const PortfolioDetail = ({
  link,
  image,
  spImage,
  portfolioTitle,
  period,
  numberOf,
  overview,
  processInfoList,
  summary,
}: PortfolioDetailProps) => {
  return (
    <div className='w-[90%] md:w-[70%] mx-auto mt-32 max-w-6xl'>
      {/* Header Section */}
      <div className='relative text-[#eee]'>
        <div className='flex flex-col mb-12'>
          <h1 className='text-3xl md:text-5xl font-extrabold tracking-widest mb-2 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
            {portfolioTitle}
          </h1>

          <div className='flex flex-wrap gap-6 text-sm md:text-base text-neutral-400 font-light mt-4'>
            <p className='flex items-center'>
              <span className='inline-block w-4 h-4 mr-2 bg-blue-400 rounded-full' />
              <span className='font-medium mr-2'>開発期間：</span>
              {period}
            </p>
            <p className='flex items-center'>
              <span className='inline-block w-4 h-4 mr-2 bg-purple-400 rounded-full' />
              <span className='font-medium mr-2'>開発人数：</span>
              {numberOf}人
            </p>
          </div>

          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-6 w-fit'
          >
            <button className='flex items-center rounded-lg bg-gradient-to-br from-neutral-900 to-zinc-800 border border-zinc-700 hover:shadow-md transition-all'>
              <div className='px-3 py-2 bg-zinc-700 rounded-l-lg'>
                <GitHubIcon className='text-white' />
              </div>
              <div className='px-4 py-2 text-sm font-semibold text-white flex gap-2 items-center'>
                GitHubで見る <LaunchIcon fontSize='small' />
              </div>
            </button>
          </a>
        </div>

        {/* Main Image */}
        <div className='overflow-hidden rounded-xl shadow-2xl mb-16'>
          <Image
            src={image}
            alt={portfolioTitle}
            width={1200}
            height={600}
            quality={100}
            className='w-full h-auto object-cover hover:scale-[1.03] hover:brightness-110 transition-all duration-700'
          />
        </div>
      </div>

      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='mt-20 text-[#eee]'
      >
        <SectionTitle title='プロジェクト概要' color='white' />
        <div className='mt-8 text-base leading-relaxed bg-zinc-800/30 p-6 rounded-lg border-l-4 border-blue-500 text-neutral-300/90'>
          {overview}
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='mt-24 text-[#eee]'
      >
        <SectionTitle title='制作過程' color='white' />
        <div className='mt-12 space-y-20'>
          {processInfoList.map((info, index) => (
            <div key={index} className='relative'>
              <div className='relative z-10'>
                <div className='flex items-center gap-4 mb-8'>
                  <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg'>
                    <span className='text-white font-bold'>{index + 1}</span>
                  </div>
                  <h3 className='text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                    {info.title}
                  </h3>
                </div>

                <div className='grid md:grid-cols-2 gap-8'>
                  <div className='overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'>
                    <Image
                      src={info.image}
                      alt={info.title}
                      width={600}
                      height={400}
                      className='w-full h-[200px] md:h-[300px] object-cover hover:scale-105 transition-transform duration-700'
                    />
                  </div>

                  <div className='space-y-6'>
                    {info.tools.map((tool, i) => (
                      <div key={i} className='bg-zinc-400/20 p-4 rounded-lg'>
                        <p className='text-base font-semibold mb-3 flex items-center text-neutral-200'>
                          <span className='inline-block w-2 h-2 bg-blue-400 rounded-full mr-2' />
                          {tool.title}
                        </p>
                        <ul className='flex flex-wrap gap-2 text-sm'>
                          {tool.items.map((item, j) => (
                            <li
                              key={j}
                              className='px-4 py-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200'
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className='text-base leading-relaxed text-neutral-300'>
                      {info.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Summary Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='mt-24 text-[#eee]'
      >
        <SectionTitle title='まとめ' color='white' />
        <div className='mt-8 text-base leading-relaxed bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 p-6 rounded-lg border-l-4 border-purple-500 text-neutral-300/90'>
          {summary}
        </div>
      </motion.section>
    </div>
  )
}

export default PortfolioDetail
