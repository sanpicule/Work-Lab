import React from 'react'
import { SnsIcons } from './SnsIcons'
import Link from 'next/link'
import { siteConfig } from '@/site.config'

const Footer = () => {
  return (
    <footer className='text-center bg-gray-900 text-white w-screen block'>
      <div className='px-4'>
        <SnsIcons />
      </div>
      {/* copyright */}
      <div className='text-start p-4 '>
        <Link href='/' scroll={false}>
          <p className='text-white text-xs'>©{siteConfig.title}</p>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
