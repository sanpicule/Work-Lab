import PortfolioDetail from '@/components/PortfolioDetail'
import React from 'react'

const index = () => {
  const skills = ['React']
  return (
    <PortfolioDetail title='TinyPost' skills={skills} />
  )
}

export default index
