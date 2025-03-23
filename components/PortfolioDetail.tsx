import { Portfolio } from '@/types/types'
import React from 'react'

const PortfolioDetail: React.FC<Portfolio> = ({ title, skills }) => {
  return (
    <div className='w-full h-auto mt-24 md:mt-48 flex flex-col justify-center py-4 px-8 md:px-20 max-w-6xl'>
      <h1>{title}</h1>
      {skills.map((skill, i) => (
        <p key={i}>{skill}</p>
      ))}
    </div>
  )
}

export default PortfolioDetail
