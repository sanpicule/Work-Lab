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
        className='z-50 t-0 l-0 r-0 h-1 w-full origin-[0%] fixed bg-gradient-to-r from-green-300 to-green-800'
      />
      <nav className='fixed z-10 w-full flex flex-wrap items-center justify-between py-3 navbar navbar-expand-lg navbar-light text-white'>
        <div className='ml-auto md:mr-4 rounded-xl w-fit h-full flex items-center gap-8 px-4 md:bg-white/90'>
          <ul className='flex items-center justify-end gap-8 ml-auto px-12 h-[60px]'>
            {navMenuList.map((navMenu) => (
              <NavNameItem
                key={navMenu.id}
                pathName={navMenu.pathName}
                menuName={navMenu.menuName}
              />
            ))}
          </ul>
          <Hamburger setOpen={setOpen} />
        </div>
        {/* スマホ時のメニュー */}
        <motion.div
          initial='closed'
          animate={open ? 'open' : 'closed'}
          variants={customAnimate.menuVariants}
          className='p-8 fixed top-0 right-0 w-full h-screen bg-[#3f3f3f]'
        >
          <ul className='w-full mt-12 flex flex-col gap-4'>
          <h4 className='mt-4 font-bold'>MENU</h4>
            {navMenuList.map((navMenu) => (
              <MobileMenuItem
                key={navMenu.id}
                setOpen={setOpen}
                pathName={navMenu.pathName}
                menuName={navMenu.menuName}
              />
            ))}
            <h4 className='mt-4 font-bold'>SNS</h4>
            <li className='flex justify-between border-b-[1px] pb-2 px-2'>
              <p>Zenn</p>
              <button className='bg-white text-sm text-black px-2 rounded-[100px]'>more→</button>
            </li>
            <li className='flex justify-between border-b-[1px] pb-2 px-2'>
              <p>GitHub</p>
              <button className='bg-white text-sm text-black px-2 rounded-[100px]'>more→</button>
            </li>
            <li className='flex justify-between border-b-[1px] pb-2 px-2'>
              <p>Twitter</p>
              <button className='bg-white text-sm text-black px-2 rounded-[100px]'>more→</button>
            </li>
            <button className='mt-12 bg-[#48a6a6] text-white font-bold py-2 rounded-[100px] shadow-md w-[200px] mx-auto'>仕事を依頼する</button>
          </ul>
          <CloseButton setOpen={setOpen} />
        </motion.div>
      </nav>
    </>
  )
}

export default NavBar
