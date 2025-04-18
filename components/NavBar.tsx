import React, { useState } from 'react'
import { navMenuList } from '@/utils/data'
import Hamburger from './HamburgerMenu'
import CloseButton from './MobileCloseButton'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import {
  Instagram as InstagramIcon,
  X as XIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material'
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

  // ... (menuVariants, menuItemVariants, snsVariants, bgVariants は変更なし)

  // ハンバーガーメニューのアニメーション
  const hamburgerVariants = {
    hidden: {
      opacity: 0,
      x: '120%',
      transition: {
        duration: 0.5, // 0.5秒で消える
        ease: 'easeInOut',
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        when: 'beforeChildren',
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Individual menu item animations
  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.68, -0.55, 0.265, 1.55], // より滑らかなイージング
      },
    },
  }

  // Animation for SNS icons section
  const snsVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: [0.68, -0.55, 0.265, 1.55], // より滑らかなイージング
      },
    },
  }

  // Animation for the background of the menu
  const bgVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      scaleX: 0.8,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      x: 0,
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: [0.17, 0.67, 0.83, 0.67], // シネマティックなイージング
      },
    },
  }
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className='z-50 t-0 l-0 r-0 h-1 w-full origin-[0%] fixed bg-gradient-to-r from-purple-400 to-pink-600'
      />
      <nav className='fixed z-30 w-full top-0 left-0 h-20 flex justify-between items-center px-8 bg-black/30 backdrop-blur-md'>
        {/* ロゴ */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Link
            href='/'
            className='tracking-widest text-md md:text-2xl font-bold'
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
        </motion.div>

        {/* ハンバーガーメニュー */}
        <AnimatePresence>
          {!open && (
            <motion.div
              key='hamburger'
              className='z-50 relative'
              variants={hamburgerVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'
            >
              <Hamburger setOpen={setOpen} open={open} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* サイドSNSアイコン */}
        <motion.div
          className='hidden md:flex flex-col items-center gap-3 fixed -translate-y-1/2 top-[300%] right-[1px]'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
          <motion.p className='-rotate-90 text-sm text-gray-300'>SNS</motion.p>
          <span className='w-[1px] h-6 bg-gray-500' />
          <motion.a
            href='https://github.com/sanpicule?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.1, rotate: 7 }}
            whileTap={{ scale: 0.95 }}
            className='text-gray-300 hover:text-white transition-transform duration-300'
          >
            <GitHubIcon fontSize='small' />
          </motion.a>
          <motion.a
            href='https://www.instagram.com/sanp___ery/'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.1, rotate: -7 }}
            whileTap={{ scale: 0.95 }}
            className='text-gray-300 hover:text-white transition-transform duration-300'
          >
            <InstagramIcon fontSize='small' />
          </motion.a>
          <motion.a
            href='https://x.com/sanpitech240?s=21'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.1, rotate: 7 }}
            whileTap={{ scale: 0.95 }}
            className='text-gray-300 hover:text-white transition-transform duration-300'
          >
            <XIcon fontSize='small' />
          </motion.a>
        </motion.div>

        {/* Mobile Menu with AnimatePresence */}
        <AnimatePresence>
          {open && (
            <>
              {/* Animated background */}
              <motion.div
                key='menu-bg'
                initial='closed'
                animate='open'
                exit='closed'
                variants={bgVariants}
                className='fixed top-0 right-0 w-full h-screen bg-black z-40 origin-top-right'
              />

              {/* Menu content */}
              <motion.div
                key='menu-content'
                initial='closed'
                animate='open'
                exit='closed'
                variants={menuVariants}
                className='p-8 fixed top-0 text-white right-0 w-full h-screen z-50 flex flex-col justify-center items-end'
              >
                <div className='w-full flex justify-end mb-8'>
                  <CloseButton setOpen={setOpen} />
                </div>
                <motion.ul className='w-full flex flex-col gap-8 items-end'>
                  <motion.h2
                    variants={menuItemVariants}
                    className='font-bold text-6xl text-right'
                  >
                    MENU
                  </motion.h2>
                  {navMenuList.map((navMenu, index) => (
                    <motion.li
                      key={navMenu.id}
                      variants={menuItemVariants}
                      custom={index}
                      className='overflow-hidden w-full text-right'
                    >
                      <motion.div
                        whileHover={{ x: -6 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Link
                          href={navMenu.pathName}
                          onClick={() => setOpen(false)}
                          className='transition-colors duration-300 flex items-center justify-end'
                        >
                          <h4 className='text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-colors duration-300'>
                            {navMenu.menuName}
                          </h4>
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                  <motion.div
                    variants={snsVariants}
                    className='mt-16 w-full flex flex-col items-end'
                  >
                    <motion.h2
                      variants={menuItemVariants}
                      className='font-bold text-6xl text-right'
                    >
                      SNS
                    </motion.h2>
                    <div className='flex gap-6 mt-12'>
                      <motion.a
                        href='https://github.com/sanpicule?tab=repositories'
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='text-gray-300 hover:text-white transition-transform duration-100'
                      >
                        <GitHubIcon fontSize='large' />
                      </motion.a>
                      <motion.a
                        href='https://www.instagram.com/sanp___ery/'
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='text-gray-300 hover:text-white transition-transform duration-100'
                      >
                        <InstagramIcon fontSize='large' />
                      </motion.a>
                      <motion.a
                        href='https://x.com/sanpitech240?s=21'
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='text-gray-300 hover:text-white transition-transform duration-100'
                      >
                        <XIcon fontSize='large' />
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default NavBar
