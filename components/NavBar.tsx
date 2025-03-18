import React, { useState } from 'react'
import { navMenuList } from '@/utils/data'
import NavNameItem from './NavNameItem'
import MobileMenuItem from './MobileMenuItem'
import Hamburger from './HamburgerMenu'
import CloseButton from './MobileCloseButton'
import { motion, useScroll } from 'framer-motion'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { SnsIcons } from './SnsIcons'

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
      <nav className='fixed z-10 w-full flex flex-wrap items-center justify-between navbar navbar-expand-lg navbar-light md:bg-white md:shadow-md'>
        <div className='ml-auto md:mr-4 rounded-xl w-fit h-full flex items-center gap-8 pr-4'>
          <ul className='flex items-center justify-end gap-8 ml-auto h-[60px]'>
            {navMenuList.map((navMenu) => (
              <NavNameItem
                key={navMenu.id}
                pathName={navMenu.pathName}
                menuName={navMenu.menuName}
              />
            ))}
            <button className='hidden md:flex items-center gap-2 bg-[#17afc6] text-white px-4 py-2 rounded-md transition font-bold hover:opacity-80'>
              <p className='text-sm'>仕事を依頼する</p>
            </button>
          </ul>
          <Hamburger setOpen={setOpen} />
        </div>
        {/* スマホ時のメニュー */}
        <motion.div
          initial='closed'
          animate={open ? 'open' : 'closed'}
          variants={customAnimate.menuVariants}
          className='p-8 fixed top-0 text-white right-0 w-full h-screen bg-[#3f3f3f]'
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
            <SnsIcons />
            <motion.button
              className='flex mt-12 items-center justify-center gap-2 bg-[#17afc6] text-white px-8 py-4 rounded-md '
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <p className='font-bold'>仕事を依頼する</p>
              <FaArrowUpRightFromSquare />
            </motion.button>
          </ul>
          <CloseButton setOpen={setOpen} />
        </motion.div>
      </nav>
    </>
  )
}

export default NavBar
