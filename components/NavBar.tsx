'use client'

import React, { useEffect, useState } from 'react'
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
      staggerDirection: -1,
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
  const [portfolioHover, setPortfolioHover] = useState(false)
  const [portfolioClick, setPortfolioClick] = useState(false)
  const { scrollYProgress } = useScroll()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [open])

  // ハンバーガーメニューのアニメーション（表示速度を上げる）
  const hamburgerVariants = {
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.2, // 早くする
        ease: 'easeOut',
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.25, // 早くする
        ease: 'easeOut',
      },
    },
  }

  // メニューアニメーション
  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.4, // 早くする
        ease: [0.76, 0, 0.24, 1],
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        when: 'beforeChildren',
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  // 個々のメニューアイテムアニメーション
  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.15, // 早くする
        ease: 'easeOut',
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  }

  // SNSアイコンセクションのアニメーション
  const snsVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.15, // 早くする
        ease: 'easeOut',
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  }

  // メニュー背景のアニメーション
  const bgVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.4, // 早くする
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  // サブメニューアニメーション
  const submenuVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const submenuItemVariants = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  const portfolioProjects = [
    { name: 'Kikara', path: '/portfolio/kikara' },
    { name: 'TinyPost', path: '/portfolio/tinypost' },
    { name: 'ShiftMe', path: '/portfolio/shiftme' },
  ]

  return (
    <>
      {/* スクロールプログレスバー */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className='z-50 t-0 l-0 r-0 h-1 w-full origin-[0%] fixed bg-gray-800'
      />

      {/* ナビゲーションバー */}
      <nav className='fixed z-30 w-full top-0 left-0 h-20 flex justify-between items-center px-8 bg-white/95 backdrop-blur-md border-b border-gray-200'>
        {/* デスクトップロゴ */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className='hidden md:block'
        >
          <Link
            href='/'
            className='tracking-widest text-md md:text-2xl font-bold text-gray-800'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className='flex'>
              <span>H</span>
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

        {/* モバイルロゴ */}
        <Link
          href='/'
          className='md:hidden tracking-widest text-md font-bold text-gray-800'
        >
          <div className='flex'>
            <motion.p
              className='px-2 py-1 border-2 border-gray-800 rounded-sm'
              whileTap={{ scale: 0.95 }}
            >
              H
            </motion.p>
          </div>
        </Link>

        {/* デスクトップメニュー */}
        <div className='hidden md:flex items-center gap-8'>
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
              className='text-gray-600 hover:text-gray-800 transition-colors duration-300'
            >
              <GitHubIcon fontSize='small' />
            </motion.a>
            <motion.a
              href='https://www.instagram.com/sanp___ery/'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1, rotate: -7 }}
              whileTap={{ scale: 0.95 }}
              className='text-gray-600 hover:text-gray-800 transition-colors duration-300'
            >
              <InstagramIcon fontSize='small' />
            </motion.a>
            <motion.a
              href='https://x.com/sanpitech240?s=21'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1, rotate: 7 }}
              whileTap={{ scale: 0.95 }}
              className='text-gray-600 hover:text-gray-800 transition-colors duration-300'
            >
              <XIcon fontSize='small' />
            </motion.a>
          </motion.div>

          {/* デスクトップナビメニュー */}
          <ul className='flex items-center gap-8'>
            {navMenuList.map((navMenu) => (
              <li key={navMenu.id} className='relative'>
                {navMenu.menuName === 'Portfolio' ? (
                  // Portfolioメニューの場合、サブメニューを表示
                  <div
                    className='relative'
                    onMouseEnter={() => setPortfolioHover(true)}
                    onMouseLeave={() => setPortfolioHover(false)}
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className='cursor-pointer'
                    >
                      <span className='text-gray-800 hover:text-gray-600 transition-colors duration-300 font-medium'>
                        {navMenu.menuName}
                      </span>
                    </motion.div>

                    {/* デスクトップサブメニュー */}
                    <AnimatePresence>
                      {portfolioHover && (
                        <motion.div
                          variants={submenuVariants}
                          initial='hidden'
                          animate='visible'
                          exit='hidden'
                          className='absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px] z-50'
                        >
                          {portfolioProjects.map((project) => (
                            <motion.div
                              key={project.name}
                              variants={submenuItemVariants}
                              className='px-4 py-2 hover:bg-gray-50 transition-colors'
                            >
                              <Link
                                href={project.path}
                                className='text-gray-700 hover:text-gray-900 transition-colors block'
                              >
                                {project.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  // 通常のメニューアイテム
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link
                      href={navMenu.pathName}
                      className='text-gray-800 hover:text-gray-600 transition-colors duration-300 font-medium'
                    >
                      {navMenu.menuName}
                    </Link>
                  </motion.div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* ハンバーガーメニュー - 表示条件修正 */}
        <AnimatePresence>
          {!open && (
            <motion.div
              key='hamburger'
              className='z-50 relative flex items-center gap-8 md:hidden'
              variants={hamburgerVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'
            >
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
                  className='text-gray-600 hover:text-gray-800 transition-colors duration-300'
                >
                  <GitHubIcon fontSize='small' />
                </motion.a>
                <motion.a
                  href='https://www.instagram.com/sanp___ery/'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1, rotate: -7 }}
                  whileTap={{ scale: 0.95 }}
                  className='text-gray-600 hover:text-gray-800 transition-colors duration-300'
                >
                  <InstagramIcon fontSize='small' />
                </motion.a>
                <motion.a
                  href='https://x.com/sanpitech240?s=21'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1, rotate: 7 }}
                  whileTap={{ scale: 0.95 }}
                  className='text-gray-600 hover:text-gray-800 transition-colors duration-300'
                >
                  <XIcon fontSize='small' />
                </motion.a>
              </motion.div>
              <Hamburger setOpen={setOpen} open={open} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* モバイルメニュー - 閉じるときのアニメーション修正 */}
        <AnimatePresence
          mode='wait'
          // 閉じる際のアニメーション処理を早くする
          onExitComplete={() => {
            // メニューが完全に閉じたら実行される処理を入れることも可能
          }}
        >
          {open && (
            <>
              {/* メニューコンテンツ */}
              <motion.div
                key='menu-content'
                initial='closed'
                animate='open'
                exit='closed'
                variants={menuVariants}
                className='px-8 fixed top-0 text-gray-800 right-0 w-full h-lvh bg-white z-50 flex flex-col justify-center items-end'
              >
                {/* クローズボタン - 独立したアニメーションで表示 */}
                <motion.div
                  className='absolute top-8 right-8 z-10'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  // 閉じる時のアニメーションを早くする
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15 },
                  }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <CloseButton setOpen={setOpen} />
                </motion.div>
                <motion.ul className='w-full flex flex-col gap-3 md:gap-4 items-end'>
                  <motion.h2
                    variants={menuItemVariants}
                    className='font-bold text-4xl md:text-5xl text-right'
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
                      {navMenu.menuName === 'Portfolio' ? (
                        <motion.div
                          whileHover={{ x: -8 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <Link
                            href='/#portfolio'
                            onClick={() => setOpen(false)}
                            className='transition-colors duration-300 flex items-center justify-end' legacyBehavior
                          >
                            <a>
                              <h4 className='text-3xl md:text-4xl font-semibold text-gray-800 transition-colors duration-300'>
                                {navMenu.menuName}
                              </h4>
                            </a>
                          </Link>
                        </motion.div>
                      ) : (
                        // 通常のメニューアイテム
                        <motion.div
                          whileHover={{ x: -8 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <Link
                            href={navMenu.pathName}
                            onClick={() => setOpen(false)}
                            className='transition-colors duration-300 flex items-center justify-end' legacyBehavior
                          >
                            <a>
                              <h4 className='text-3xl md:text-4xl font-semibold text-gray-800 transition-colors duration-300'>
                                {navMenu.menuName}
                              </h4>
                            </a>
                          </Link>
                        </motion.div>
                      )}
                    </motion.li>
                  ))}
                  <motion.div
                    variants={snsVariants}
                    className='mt-12 md:mt-16 w-full flex flex-col items-end'
                  >
                    <motion.h2
                      variants={menuItemVariants}
                      className='font-bold text-4xl md:text-5xl text-right'
                    >
                      SNS
                    </motion.h2>
                    <div className='flex gap-2 md:gap-6 mt-2'>
                      <motion.a
                        href='https://github.com/sanpicule?tab=repositories'
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='text-gray-600 hover:text-gray-800 transition-colors duration-300'
                      >
                        <GitHubIcon fontSize='large' />
                      </motion.a>
                      <motion.a
                        href='https://www.instagram.com/sanp___ery/'
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='text-gray-600 hover:text-gray-800 transition-colors duration-300'
                      >
                        <InstagramIcon fontSize='large' />
                      </motion.a>
                      <motion.a
                        href='https://x.com/sanpitech240?s=21'
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='text-gray-600 hover:text-gray-800 transition-colors duration-300'
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
