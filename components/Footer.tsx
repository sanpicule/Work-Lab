import React from 'react'
import { SnsIcons } from './SnsIcons'
import Link from 'next/link'
import { siteConfig } from '@/site.config'
import { caveat } from '@/utils/font';

const Footer = () => {
  return (
    <footer className='text-center bg-gray-900 text-white block p-4'>
      <h1 className={`${caveat.className} text-start`}>Portfolio</h1>
      <div className='mt-4'><SnsIcons /></div>
      {/* copyright */}
      <Link href='/' scroll={false}>
        <p className='text-white text-xs mt-12'>©{siteConfig.title}</p>
      </Link>
    </footer>
  )
}

export default Footer
