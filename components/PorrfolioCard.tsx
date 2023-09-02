import { PortfolioCardProps } from '@/types/types'
import React from 'react'

const PortfolioCard: React.FC<PortfolioCardProps> = ({ url, title }) => {
  return (
    <a
      href={url}
      target='_blank'
    >
      <div className='bg-white mt-10 transition p-10 w-96 h-48 border border-gray-200 rounded-lg cursor-pointer md:hover:shadow-2xl md:hover:border-none hover:scale-125'>
        <h4 className='font-caveat flex items-center justify-center h-full'>{title}</h4>
      </div>
    </a>
  )
}

export default PortfolioCard
