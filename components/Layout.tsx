import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { motion } from 'framer-motion'
import { LayoutProps } from '@/types/types'

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='body relative overflow-hidden'>
      <div className='flex flex-col w-full'>
        <NavBar />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
        >
          <main className='w-full bg-[#cbcbcb]'>
            {children}
          </main>
        </motion.div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
