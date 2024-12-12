import Layout from '@/components/Layout'
import PortfolioDetail from '@/components/PortfolioDetail'
import React from 'react'

const index = () => {
  const skills = [
    'Next.js',
  ]
  return (
    <Layout>
      <PortfolioDetail title='PostingProfile' skills={skills} />
    </Layout>
  )
}

export default index