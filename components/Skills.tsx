import React, { useState } from 'react'
import { siteConfig } from '@/site.config'
import Image from 'next/image'
import { skillList } from '@/utils/data'
import { Skill } from '@/types/types'
import { motion } from 'framer-motion'
import styles from '../styles/styles.module.css'
import Link from 'next/link'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import SectionTitle from './SectionTitle'
export const Skills = () => {
  const customAnimate = useCustomAnimation()
  const [openSkill, setOpenSkill] = useState<Skill | null>(null)
  const handleToggle = (skill: Skill) => {
    if (openSkill && openSkill.skillName === skill.skillName) {
      setOpenSkill(null)
    } else {
      setOpenSkill(skill)
    }
  }
  return (
    <div className='w-full mt-36 bg-slate-700 shadow-[0px_0px_15px_2px_#000]'>
      <div className='fixed h-screen w-screen -z-50'>
        <Image
          src='https://images.unsplash.com/photo-1706701490849-cc4bd0a13108?q=80&w=3370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='猫は最高に可愛い'
          className='object-cover'
          quality={100}
          sizes='100vw'
          fill
        />
      </div>
      <div className='max-w-6xl mx-auto w-full h-auto flex flex-col rounded-[40px] py-8 md:py-40 px-8 md:px-20'>
        <div className='text-white'>
          <SectionTitle title={siteConfig.language} />
        </div>
        <motion.ul
          variants={customAnimate.scrollFadeInFromBottom}
          initial={customAnimate.scrollFadeInFromBottom.initial}
          whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
          viewport={customAnimate.scrollFadeInFromBottom.viewport}
          className='flex flex-col md:flex-row justify-between gap-12 md:gap-24 mt-8 md:mt-12 max-w-6xl'
        >
          {skillList.map((skill) => (
            <li key={skill.skillName} className='mx-auto'>
              <motion.div
                layout
                data-isOpen={openSkill?.skillName === skill.skillName}
                initial={{ borderRadius: 24 }}
                className={styles.parent}
                onClick={() => handleToggle(skill)}
              >
                <motion.div layout className={styles.child}>
                  <Image
                    src={skill.imageUrl}
                    alt=''
                    width={70}
                    height={70}
                    className='w-full h-full'
                  />
                  {openSkill?.skillName === skill.skillName && (
                    <motion.h3
                      className='mt-4 transition-opacity duration-700 opacity-1'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {skill.skillName}
                    </motion.h3>
                  )}
                </motion.div>
                {openSkill?.skillName === skill.skillName && (
                  <div className='mt-4 transition-opacity duration-500 opacity-1'>
                    <p>{skill.description}</p>
                    <Link href={`/tags/${skill.skillName}`} scroll={false}>
                      <motion.div
                        whileHover={{
                          scale: [1, 1.2, 0.9, 1.05, 1],
                        }}
                        transition={{
                          duration: 0.6,
                          ease: 'easeInOut',
                        }}
                        whileTap={{ scale: 0.95 }}
                        className='inline-block'
                      >
                        <button className='px-4 py-2 mt-4 bg-slate-700 rounded-lg shadow-lg hover:bg-slate-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-700 text-base font-semibold'>
                          <p className='text-white text-sm'>記事を見る</p>
                        </button>
                      </motion.div>
                    </Link>
                  </div>
                )}
              </motion.div>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}
