import { siteConfig } from '@/site.config'
import Link from 'next/link'
import React, { useState } from 'react'
import { navMenuList } from '@/utils/data'
import NavNameItem from './NavNameItem'
import MobileMenuItem from './MobileMenuItem'
import Hamburger from './HamburgerMenu'
import CloseButton from './MobileCloseButton'
import { motion, useScroll } from 'framer-motion'
import useCustomAnimation from '@/hooks/useCustomAnimation'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const customAnimate = useCustomAnimation()

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className='z-50 t-0 l-0 r-0 h-1 w-full origin-[0%] fixed bg-gradient-to-r from-red-300 to-red-500'
      />
      <nav className='fixed z-10 w-full flex h-[80px] flex-wrap items-center justify-between py-3 navbar navbar-expand-lg navbar-light bg-white text-[#202022]'>
        <div className='container-fluid w-full flex items-center justify-between px-6'>
          <ul className='flex items-center justify-end gap-8 ml-auto'>
            {navMenuList.map((navMenu) => (
              <NavNameItem
                key={navMenu.id}
                pathName={navMenu.pathName}
                menuName={navMenu.menuName}
              />
            ))}
            <Hamburger setOpen={setOpen} />
          </ul>
        </div>
        {/* スマホ時のメニュー */}
        <motion.div
          initial='closed'
          animate={open ? 'open' : 'closed'}
          variants={customAnimate.menuVariants}
          className='p-8 fixed top-0 right-0 w-[60%] h-full bg-black opacity-90'
        >
          <ul className='w-full mt-12 flex flex-col gap-4'>
            {navMenuList.map((navMenu) => (
              <MobileMenuItem
                key={navMenu.id}
                setOpen={setOpen}
                pathName={navMenu.pathName}
                menuName={navMenu.menuName}
              />
            ))}
          </ul>
          <CloseButton setOpen={setOpen} />
        </motion.div>
      </nav>
    </>
  )
}

export default NavBar
