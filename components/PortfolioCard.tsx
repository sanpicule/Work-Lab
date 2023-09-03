import { PortfolioCardProps } from '@/types/types'
import Link from 'next/link'
import React from 'react'

const PortfolioCard: React.FC<PortfolioCardProps> = ({ url, title }) => {
  return (
    <Link
      href={url}
      target='_blank'
    >
      <div className='flex justify-center'>
        <div className='bg-white border py-20 px-32 transition max-w-sm rounded overflow-hidden w-full my-6 md:my-0 content-between grid md:hover:scale-125 md:hover:shadow-none'>
          <h4 className='font-caveat flex items-center justify-center h-full'>{title}</h4>
        </div>
      </div>
    </Link>
  )
}

export default PortfolioCard
