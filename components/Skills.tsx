import React, { useState } from 'react'
import { siteConfig } from '@/site.config'
import Image from 'next/image'
import { skillList } from '@/utils/data'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import SectionTitle from './SectionTitle'
import { caveat } from '@/utils/font'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

export const Skills = () => {
  const customAnimate = useCustomAnimation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  }

  return (
    <div className='w-full'>
      <div className='max-w-6xl mx-auto w-full flex flex-col pt-24 md:py-40 px-8 md:px-20 justify-center'>
        <div className='text-white border-b-2 border-[#17afc6]'>
          <SectionTitle title={siteConfig.language} />
        </div>
        <motion.ul
          variants={customAnimate.scrollFadeInFromBottom}
          initial={customAnimate.scrollFadeInFromBottom.initial}
          whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
          viewport={customAnimate.scrollFadeInFromBottom.viewport}
          className='grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-12 mt-8 md:mt-12'
        >
          {skillList.map((skill, i) => (
            <li key={skill.skillName} className='mx-auto w-full h-full'>
              <div className='h-full flex flex-col items-center md:flex-row'>
                <div className='flex flex-col md:w-2/5 w-full h-full'>
                  <div className='flex flex-col gap-4'>
                    <p className={`${caveat.className} text-4xl md:text-6xl`}>
                      0{i + 1}
                    </p>
                    <div className='flex items-center gap-4 bg-white md:bg-transparent p-4 rounded-2xl'>
                      <Image
                        src={skill.imageUrl}
                        alt={skill.skillName}
                        width={60}
                        height={60}
                        className='object-contain'
                      />
                      <h1 className='text-xl md:text-4xl mt-3 font-medium md:text-white text-[#2e2e2e]'>
                        {skill.skillName}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className='hidden md:w-3/5 w-full mt-4 md:mt-0 md:pl-12 md:border-l md:flex flex-col items-end md:items-start justify-center'>
                  <p className='text-white text-sm'>{skill.description}</p>
                  <motion.button
                    className='py-2 px-8 mt-4 rounded-md cursor-pointer bg-[#17afc6] hover:shadow-[0px_0px_10px_0px_#fff]'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={`./tags/${skill.skillName}`}
                      className='flex items-center gap-2 rounded-md text-white'
                    >
                      <p>記事を見にいく</p>
                      <KeyboardDoubleArrowRightIcon />
                    </Link>
                  </motion.button>
                </div>
                <div className='md:hidden w-full mt-4'>
                  <button
                    className='w-full text-white text-start rounded-md focus:outline-none flex items-center'
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <motion.div
                      animate={{ rotate: openIndex === i ? 90 : 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <ArrowRightIcon />
                    </motion.div>
                    <span className='ml-2'>
                      {openIndex === i ? '閉じる' : '説明を見る'}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        variants={toggleVariants}
                        className='md:hidden mt-4 overflow-hidden'
                      >
                        <p>{skill.description}</p>
                        <Link
                          href={`./tags/${skill.skillName}`}
                          className='flex items-center justify-between gap-2 mt-4 md:mt-2 md:text-[#2e2e2e] border-b'
                        >
                          <p>記事を見にいく</p>
                          <KeyboardDoubleArrowRightIcon />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}
