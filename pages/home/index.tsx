import Layout from '@/components/Layout'
import { siteConfig } from '@/site.config'
import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <Layout>
      <div className='pt-20'>
        <h1>{siteConfig.portfolio}</h1>
        <div className="grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12">
          <a href='https://sp-link-sannsi4444-gmailcom.vercel.app/' target='_blank'>
            <div className='mt-10 transition p-10 w-60 h-36 border border-gray-200 cursor-pointer hover:shadow-2xl hover:border-none'>
              <h4 className='flex items-center justify-center h-full'>SPLink</h4>
            </div>
          </a>
          <a href='https://nextjs-microcms-theta.vercel.app/' target='_blank'>
            <div className='mt-10 transition p-10 w-60 h-36 border border-gray-200 cursor-pointer hover:shadow-2xl hover:border-none'>
              <h4 className='flex items-center justify-center h-full'>CMS</h4>
            </div>
          </a>
          <a href='https://nextjs-microcms-theta.vercel.app/' target='_blank'>
            <div className='mt-10 transition p-10 w-60 h-36 border border-gray-200 cursor-pointer hover:shadow-2xl hover:border-none'>
              <h4 className='flex items-center justify-center h-full'>CMS</h4>
            </div>
          </a>
          <a href='https://nextjs-microcms-theta.vercel.app/' target='_blank'>
            <div className='mt-10 transition p-10 w-60 h-36 border border-gray-200 cursor-pointer hover:shadow-2xl hover:border-none'>
              <h4 className='flex items-center justify-center h-full'>CMS</h4>
            </div>
          </a>
          <a href='https://nextjs-microcms-theta.vercel.app/' target='_blank'>
            <div className='mt-10 transition p-10 w-60 h-36 border border-gray-200 cursor-pointer hover:shadow-2xl hover:border-none'>
              <h4 className='flex items-center justify-center h-full'>CMS</h4>
            </div>
          </a>
          <a href='https://nextjs-microcms-theta.vercel.app/' target='_blank'>
            <div className='mt-10 transition p-10 w-60 h-36 border border-gray-200 cursor-pointer hover:shadow-2xl hover:border-none'>
              <h4 className='flex items-center justify-center h-full'>CMS</h4>
            </div>
          </a>
      </div>
      </div>
    </Layout>
  )
}

export default index
