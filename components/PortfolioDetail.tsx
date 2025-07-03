import React from 'react'

export type ProcessInfo = {
  title: string
  image: string
  description: string
  tools: { title: string; items: string[] }[]
}

export type PortfolioDetailProps = {
  link: string
  url?: string
  image: string
  spImage?: string
  portfolioTitle: string
  period: string
  numberOf: number
  overview: string
  processInfoList: ProcessInfo[]
  summary: string
}

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({
  link,
  url,
  portfolioTitle,
  period,
  numberOf,
  overview,
  processInfoList,
  summary,
}) => {
  return (
    <div className='max-w-5xl mx-auto py-32 px-2'>
      <div className='bg-white rounded-2xl shadow-2xl p-4 sm:p-8 md:p-12 border border-gray-200'>
        <h1 className='text-5xl font-extrabold mb-6 text-gray-900 tracking-tight'>
          {portfolioTitle}
        </h1>
        <div className='flex flex-wrap gap-4 mb-8 items-center'>
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block px-4 py-2 bg-gray-900 text-white rounded-full font-semibold shadow hover:bg-gray-700 transition-colors'
          >
            GitHubリポジトリ
          </a>
          {url && (
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block px-4 py-2 bg-gray-100 text-gray-900 rounded-full font-semibold shadow hover:bg-gray-200 transition-colors border border-gray-300'
            >
              サイトを見る
            </a>
          )}
          <span className='text-gray-700'>期間: {period}</span>
          <span className='text-gray-700'>人数: {numberOf}人</span>
        </div>
        <div className='mb-10'>
          <h2 className='text-xl font-bold text-gray-900 mb-2 border-l-4 border-gray-400 pl-3'>
            概要
          </h2>
          <p className='text-gray-800 leading-relaxed bg-gray-50 rounded-lg p-4 shadow-inner'>
            {overview}
          </p>
        </div>
        <div className='mb-10'>
          <h2 className='text-xl font-bold text-gray-900 mb-4 border-l-4 border-gray-400 pl-3'>
            開発プロセス
          </h2>
          <div className='space-y-8'>
            {processInfoList.map((process, idx) => (
              <div
                key={idx}
                className='bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200'
              >
                <h3 className='text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2'>
                  <span className='inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow'>
                    {process.title}
                  </span>
                </h3>
                <p className='mb-2 text-gray-700 leading-relaxed'>
                  {process.description}
                </p>
                <div className='flex flex-wrap gap-2 mt-2'>
                  {process.tools.map((tool, i) => (
                    <span
                      key={i}
                      className='inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium border border-gray-200'
                    >
                      <span className='font-semibold text-gray-700 mr-1'>
                        {tool.title}:
                      </span>
                      {tool.items.join(', ')}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-xl font-bold text-gray-900 mb-2 border-l-4 border-gray-400 pl-3'>
            まとめ
          </h2>
          <p className='text-gray-800 leading-relaxed bg-gray-50 rounded-lg p-4 shadow-inner'>
            {summary}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PortfolioDetail
