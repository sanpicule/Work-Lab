import Layout from '@/components/Layout'
import PortfolioCard from '@/components/PorrfolioCard'
import { siteConfig } from '@/site.config'
import { portfolioList } from '@/utils/data'
import React from 'react'

const index = () => {
  return (
    <Layout>
      <div className='pt-20'>
        <h1>{siteConfig.portfolio}</h1>
        <div className="grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12">
          {portfolioList.map((portfolio) => (
            <PortfolioCard
              key={portfolio.id}
              url={portfolio.url}
              title={portfolio.title}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default index
