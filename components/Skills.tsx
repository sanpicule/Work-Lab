import React, { useState } from 'react'
import { siteConfig } from '@/site.config'
import Image from 'next/image'
import { skillList } from '@/utils/data'
import { Skill } from '@/types/types'
import { motion } from 'framer-motion'
import styles from '../styles/styles.module.css'
import Link from 'next/link'
import useCustomAnimation from '@/hooks/useCustomAnimation'
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
    <div className='w-full h-auto flex flex-col mt-36'>
      <motion.div
        variants={customAnimate.scrollFadeInFromTop}
        initial={customAnimate.scrollFadeInFromTop.initial}
        whileInView={customAnimate.scrollFadeInFromTop.whileInView}
        viewport={customAnimate.scrollFadeInFromTop.viewport}
        className='flex items-center justify-end gap-4'
      >
        <p className='text-[24px] md:text-[36px]'>{siteConfig.language}</p>
        <span className='w-12 h-[1px] bg-slate-700'></span>
      </motion.div>
      <motion.ul
        variants={customAnimate.scrollFadeInFromBottom}
        initial={customAnimate.scrollFadeInFromBottom.initial}
        whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
        viewport={customAnimate.scrollFadeInFromBottom.viewport}
        className='flex flex-col md:flex-row gap-12 md:gap-24 mt-8 md:mt-12'
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
  )
}
