'use client'

import React from 'react'
import Link from 'next/link'
import { siteConfig } from '@/site.config'
import { caveat } from '@/utils/font'
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
    <footer className='bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-6'>
      <div className='container mx-auto max-w-6xl w-[80%] md:w-[60%]'>
        {/* Top section with logo and social icons */}
        <div className='flex flex-col md:flex-row items-center md:items-start justify-between mb-10 border-b border-gray-700 pb-8'>
          {/* Left side - Logo and tagline */}
          <div className='text-left mb-6 md:mb-0'>
            <h1
              className={`${caveat.className} text-3xl md:text-4xl text-white mb-2`}
            >
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
                  whileHover={{ scale: 1.1, rotate: 7 }}
                  whileTap={{ scale: 0.95 }}
                  className='text-gray-300 hover:text-white transition-transform duration-300'
                >
                  <GitHubIcon />
                </motion.a>
                <motion.a
                  href='https://www.instagram.com/sanp___ery/'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1, rotate: -7 }}
                  whileTap={{ scale: 0.95 }}
                  className='text-gray-300 hover:text-white transition-transform duration-300'
                >
                  <InstagramIcon />
                </motion.a>
                <motion.a
                  href='https://x.com/sanpitech240?s=21'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1, rotate: 7 }}
                  whileTap={{ scale: 0.95 }}
                  className='text-gray-300 hover:text-white transition-transform duration-300'
                >
                  <XIcon />
                </motion.a>
              </motion.div>
            </div>
            <p className='text-gray-400 text-sm group'>
              <a
                href='mailto:sannsi4444@gmail.com'
                className='transition duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text'
              >
                sannsi4444@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Middle section with quick links */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Navigation</h3>
            <ul className='space-y-2 text-gray-400'>
              {navMenuList.map((menu) => (
                <li key={menu.id}>
                  <Link
                    href={menu.pathName}
                    className='transition duration-300 md:hover:text-purple-500'
                  >
                    {menu.menuName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4'>Services</h3>
            <ul className='space-y-2 text-gray-400'>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4'>Development Blog</h3>
            <button className='w-[80px] md:w-[100px] bg-[#eee] p-2 rounded-md hover:opacity-70 transition duration-300'>
              <Image
                className='mx-auto object-cover w-full h-full'
                src='/zenn.png'
                alt=''
                width={2000}
                height={2000}
                quality={100}
              />
            </button>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className='text-center pt-6 border-t border-gray-700'>
          <Link href='/' scroll={false}>
            <p className='text-gray-400 text-sm hover:text-white transition duration-300'>
              ©{currentYear} {siteConfig.title} • All Rights Reserved
            </p>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
