'use client'

import React from 'react'
import Link from 'next/link'
import { siteConfig } from '@/site.config'
import { navMenuList } from '@/utils/data'
import { motion } from 'framer-motion'
import {
  Instagram as InstagramIcon,
  X as XIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-gray-900 text-gray-100 py-8'>
      <div className='relative w-full px-10 md:px-40'>
        {/* Top section with logo and social icons */}
        <div className='flex flex-col md:flex-row items-center md:items-start justify-between mb-10 border-b border-gray-200 pb-8'>
          {/* Left side - Logo and tagline */}
          <div className='text-left mb-6 md:mb-0'>
            <h1 className='text-3xl md:text-4xl text-gray-100 mb-2'>
              Portfolio
            </h1>
            <p className='text-gray-400 text-sm max-w-md'>
              To be an engineer who supports the acceleration of business
            </p>
          </div>

          {/* Right side - Social icons and contact */}
          <div className='flex flex-col items-center md:items-end'>
            <div className='mb-4'>
              <motion.div
                className='flex gap-4'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              >
                <motion.a
                  href='https://github.com/sanpicule?tab=repositories'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition-transform duration-300'
                >
                  <GitHubIcon />
                </motion.a>
                <motion.a
                  href='https://www.instagram.com/sanp___ery/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition-transform duration-300'
                >
                  <InstagramIcon />
                </motion.a>
                <motion.a
                  href='https://x.com/sanpitech240?s=21'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition-transform duration-300'
                >
                  <XIcon />
                </motion.a>
              </motion.div>
            </div>
            <p className='text-gray-400 text-sm group'>
              <a
                href='mailto:sannsi4444@gmail.com'
                className='transition duration-300 hover:text-white'
              >
                sannsi4444@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Middle section with quick links */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          <div>
            <h3 className='text-xl font-semibold mb-4 text-gray-100'>
              Navigation
            </h3>
            <ul className='space-y-2 text-gray-400'>
              {navMenuList.map((menu) => (
                <li key={menu.id}>
                  <Link
                    href={menu.pathName}
                    className='transition duration-300 md:hover:text-white'
                  >
                    {` - ${menu.menuName}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className='text-center pt-6 border-t border-gray-200'>
          <Link href='/' scroll={false} legacyBehavior>
            <a>
              <p className='text-gray-400 text-sm hover:text-white transition duration-300'>
                ©{currentYear} {siteConfig.title} • All Rights Reserved
              </p>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
