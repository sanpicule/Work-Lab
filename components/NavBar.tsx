import React, { useState } from 'react'
import { navMenuList } from '@/utils/data'
import NavNameItem from './NavNameItem'
import MobileMenuItem from './MobileMenuItem'
import Hamburger from './HamburgerMenu'
import CloseButton from './MobileCloseButton'
import { motion, useScroll } from 'framer-motion'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import { SnsIcons } from './SnsIcons'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import GitHubIcon from '@mui/icons-material/GitHub'
import Link from 'next/link'

const containerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // 👈 消えるときも順番に消す
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
}

const letterVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
}

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const customAnimate = useCustomAnimation()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className='z-50 t-0 l-0 r-0 h-2 w-full origin-[0%] fixed bg-gradient-to-r from-green-300 to-green-800'
      />
      <nav className='fixed z-10 w-auto top-[5%] right-[2%] navbar navbar-expand-lg navbar-light'>
        <div className='ml-auto md:mr-4 rounded-xl w-full h-full flex items-center gap-8 pr-4'>
          <ul className='flex flex-col gap-4'>
            {navMenuList.map((navMenu) => (
              <NavNameItem
                key={navMenu.id}
                pathName={navMenu.pathName}
                menuName={navMenu.menuName}
              />
            ))}
          </ul>
          <div className='flex flex-col items-center gap-2 md:gap-4 fixed -translate-y-1/2 top-1/2 right-1 md:right-8'>
            <p className='-rotate-90 text-sm'>SNS</p>
            <span className='w-[1px] h-4 md:h-8 bg-white' />
            <a
              href='https://github.com/sanpicule?tab=repositories'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GitHubIcon fontSize='small' />
            </a>
            <a
              href='https://www.instagram.com/sanp___ery/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon fontSize='small' />
            </a>
            <a
              href='https://x.com/sanpitech240?s=21'
              target='_blank'
              rel='noopener noreferrer'
            >
              <XIcon fontSize='small' />
            </a>
          </div>
          <Link
            href='/'
            className='fixed top-[5%] left-[5%] tracking-widest text-md md:text-2xl font-bold'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className='flex'>
              {/* Hは常に表示 */}
              <span>H</span>
              {/* IKAWA部分だけアニメーション対象 */}
              <motion.div
                className='flex overflow-hidden'
                variants={containerVariants}
                initial='hidden'
                animate={isHovered ? 'visible' : 'hidden'}
              >
                {'IKAWA'.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className='inline-block'
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </Link>
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
            <h4 className='mt-8 font-bold'>無料見積もり！</h4>
            <div className='flex flex-col gap-2 mt-2 pl-2'>
              <p className='text-sm'>
                無料でサイト作成の見積もりを行っています。
              </p>
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSfBmmCi_30buJqMOBPWH8byvqZEkDziPoSv1I3l-rLdJ-WzZw/viewform?usp=dialog'
                target='_blank'
              >
                <motion.button
                  className='flex items-center justify-center gap-2 bg-[#17afc6] text-white px-8 py-2 rounded-md '
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <p className='font-bold'>見積もりする</p>
                </motion.button>
              </a>
            </div>
          </ul>
          <CloseButton setOpen={setOpen} />
        </motion.div>
      </nav>
    </>
  )
}

export default NavBar
