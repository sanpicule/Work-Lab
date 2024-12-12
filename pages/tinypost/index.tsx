import Layout from '@/components/Layout'
import PortfolioDetail from '@/components/PortfolioDetail'
import React from 'react'

const index = () => {
  const skills = [
    'React',
  ]
  return (
    <Layout>
      <PortfolioDetail title='TinyPost' skills={skills} />
    </Layout>
  )
}

export default index