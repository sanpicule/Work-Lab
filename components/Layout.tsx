import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { LayoutProps } from '@/types/types'

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col items-center max-w-6xl w-full mx-auto">
        <NavBar />
        <main className='w-full pt-20 pb-20 px-4 flex items-center justify-start'>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
