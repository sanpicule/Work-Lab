import { Portfolio, PropertyType } from '@/types/types'
import React from 'react'

const PortfolioDetail: React.FC<Portfolio> = ({ title, skills }) => {
  return (
    <div>
      <h1 className='w-full'>{title}</h1>
      {skills.map((skill, i) => (
        <p key={i}>{skill}</p>
      ))}
    </div>
  )
}

export default PortfolioDetail
