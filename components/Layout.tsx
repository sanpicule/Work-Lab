import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutProps } from '@/types/types'
import { useRouter } from 'next/router'

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()

  return (
    <div className='body relative w-full'>
      <div className='flex flex-col'>
        <NavBar />
        <AnimatePresence mode='wait'>
          <motion.div
            key={router.pathname}
            initial={{ opacity: 0, scale: 1, rotateX: 10, y: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 1, rotateX: -5, y: -10 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className='min-h-screen bg-[#2e2e2e] shadow-lg'
          >
            <main>{children}</main>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
