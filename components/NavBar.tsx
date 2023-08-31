import { siteConfig } from '@/site.config'
import Link from 'next/link'
import React from 'react'
import Breadcrumb from './Breadcrumb'

const NavBar = () => {
  return (
    <nav className="fixed z-10 bg-gray-700 w-full flex flex-wrap items-center justify-between py-3  text-white focus:text-gray-700 navbar navbar-expand-lg navbar-light w-screen">
      <div className="container-fluid w-full flex items-center justify-between px-6">
        <div
          className="bg-grey-light rounded-md w-full"
          aria-label="breadcrumb"
        >
          <Link href="/">
            <h4 className="text-white hover:text-gray-600">{siteConfig.title}</h4>
          </Link>
          {/* Breadcrumb */}
          <Breadcrumb />
        </div>
        <ul className='flex'>
          <li className='ml-10 cursor-pointer'>Home</li>
          <li className='ml-10 cursor-pointer'>Articles</li>
          <li className='ml-10 cursor-pointer'>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
