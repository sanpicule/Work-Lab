import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

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
    <div className='w-[80%] md:w-[60%] mx-auto mt-32 max-w-6xl'>
      {/* Header Section */}
      <div className='relative'>
        <div className='flex flex-col justify-start items-start text-start text-[#eee] mb-8'>
          <h1 className='text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
            {portfolioTitle}
          </h1>
          <div className='flex flex-wrap gap-6 text-sm md:text-base mt-4 text-zinc-300 font-light'>
            <p className='flex items-center'>
              <span className='inline-block w-4 h-4 mr-2 bg-blue-400 rounded-full'></span>
              <span className='font-medium mr-2'>開発期間：</span>
              {period}
            </p>
            <p className='flex items-center'>
              <span className='inline-block w-4 h-4 mr-2 bg-purple-400 rounded-full'></span>
              <span className='font-medium mr-2'>開発人数：</span>
              {numberOf}人
            </p>
          </div>
          <a href={link} target='_blank' rel='noopener noreferrer'>
            <button className='flex items-center mt-6 rounded-md overflow-hidden border-2'>
              <div className='px-2'>
                <GitHubIcon />
              </div>
              <div className='flex items-center gap-2 p-1 bg-[#eee] text-[#2e2e2e]'>
                <p className='font-semibold text-sm md:text-lg'>GitHubで見る</p>
                <LaunchIcon />
              </div>
            </button>
          </a>
        </div>

        {/* Main Image */}
        <div className='hidden md:block mx-auto overflow-hidden rounded-xl shadow-2xl mb-16'>
          <Image
            src={image}
            alt={portfolioTitle}
            width={1200}
            height={600}
            quality={100}
            className='w-full h-auto object-cover'
          />
        </div>

        <div className='block md:hidden w-[60%] mx-auto overflow-hidden rounded-xl shadow-2xl mb-16'>
          <Image
            src={spImage}
            alt={portfolioTitle}
            width={600}
            height={400}
            quality={100}
            className='w-full h-auto object-cover'
          />
        </div>
      </div>

      {/* Content Section */}
      <div className='mx-auto pb-24 text-zinc-800 rounded-lg'>
        {/* Overview Section */}
        <section className='mt-16 text-[#eee]'>
          <SectionTitle title='プロジェクト概要' color='white' />
          <div className='mt-8 text-sm md:text-base leading-7 md:leading-8 bg-zinc-800/30 p-6 rounded-lg border-l-4 border-blue-500'>
            {overview}
          </div>
        </section>

        {/* Process Section */}
        <section className='mt-24 text-[#eee]'>
          <SectionTitle title='制作過程' color='white' />

          <div className='mt-12 space-y-20'>
            {processInfoList.map((info, index) => (
              <div key={index} className='relative'>
                {/* Step number in background */}
                <span className='absolute -left-6 md:-left-12 top-0 text-6xl md:text-8xl font-bold text-zinc-800/30 select-none'>
                  {index + 1}
                </span>

                <div className='relative z-10'>
                  {/* Step Title */}
                  <div className='flex items-center gap-4 mb-8'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg'>
                      <span className='text-white font-bold'>{index + 1}</span>
                    </div>
                    <h3 className='text-xl md:text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                      {info.title}
                    </h3>
                  </div>

                  {/* Content Grid */}
                  <div className='grid md:grid-cols-2 gap-8'>
                    {/* Process Image */}
                    <div className='w-full h-[200px] md:h-[250px] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'>
                      <Image
                        src={info.image}
                        alt={info.title}
                        width={600}
                        height={400}
                        className='w-full h-auto object-cover hover:scale-105 transition-transform duration-700'
                      />
                    </div>

                    {/* Tools and Description */}
                    <div className='space-y-6'>
                      {/* Tools Used */}
                      <div className='space-y-6'>
                        {info.tools.map((tool, i) => (
                          <div
                            key={i}
                            className='bg-zinc-400/30 p-4 rounded-lg'
                          >
                            <p className='text-sm md:text-base font-semibold mb-3 flex items-center'>
                              <span className='inline-block w-2 h-2 bg-blue-400 rounded-full mr-2'></span>
                              {tool.title}
                            </p>
                            <ul className='flex flex-wrap gap-2 text-xs md:text-sm'>
                              {tool.items.map((item, j) => (
                                <li
                                  key={j}
                                  className='px-3 py-1 bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white rounded-full shadow-sm hover:shadow-md transition-all duration-200'
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Process Description */}
                      <div className='text-sm md:text-base leading-6 md:leading-7 text-zinc-300'>
                        {info.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Summary Section */}
        <section className='mt-24 text-[#eee]'>
          <SectionTitle title='まとめ' color='white' />
          <div className='mt-8 text-sm md:text-base leading-7 md:leading-8 bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 p-6 rounded-lg border-l-4 border-purple-500'>
            {summary}
          </div>
        </section>
      </div>
    </div>
  )
}

export default PortfolioDetail
