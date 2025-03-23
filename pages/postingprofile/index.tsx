import PortfolioDetail from '@/components/PortfolioDetail'
import React from 'react'

const index = () => {
  const skills = ['Next.js']
  return (
    <PortfolioDetail title='PostingProfile' skills={skills} />
  )
}

export default index
