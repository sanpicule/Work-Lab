import React, { useState } from 'react'
import { siteConfig } from '@/site.config'
import Image from 'next/image'
import { skillList } from '@/utils/data'
import { Skill } from '@/types/types'
import { motion } from "framer-motion";
import styles from '../styles/styles.module.css'
import Link from 'next/link'

export const Skills = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [animateComp, setAnimateComp] = useState(false)
  const [targetSkill, setTargetSkill] = useState<Skill>({
    skillName: '',
    officialUrl: '',
    imageUrl: '',
    description: ''
  })
  const checkTarget = (item: Skill) => {
    return targetSkill && targetSkill.skillName === item.skillName;
  };
  return (
    <div className='w-full h-auto flex flex-col mt-36'>
      <div className='flex items-center justify-end gap-4'>
        <p className='text-[24px] md:text-[36px]'>
          {siteConfig.language}
        </p>
        <span className='w-12 h-[1px] bg-slate-700'></span>
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mt-8 md:mt-12'>
        {skillList.map((skill) => (
          <li key={skill.skillName} className="mx-auto">
            <motion.div
              layout
              data-isOpen={isOpen}
              initial={{ borderRadius: 24 }}
              className={styles.parent}
              onClick={() => {
                setIsOpen(!isOpen);
                setTargetSkill(skill);
                setTimeout(() => {
                  if (isOpen) {
                    setAnimateComp(false)
                  } else {
                    setAnimateComp(true)
                  }
                }, 100)
              }}
            >
              <motion.div layout className={styles.child}>
                <Image
                  src={skill.imageUrl}
                  alt=""
                  width={70}
                  height={70}
                  className="w-full h-full"
                />
                {isOpen && checkTarget(skill) &&
                  <h3
                    className={`mt-4 transition-opacity duration-500 ${animateComp ? 'opacity-1' : 'opacity-0'}`}
                  >
                    {skill.skillName}
                  </h3>
                }
              </motion.div>
              {isOpen && checkTarget(skill) && (
                <div className={`mt-4 transition-opacity duration-500 ${animateComp ? 'opacity-1' : 'opacity-0'}`}>
                  <p>{skill.description}</p>
                  <Link href={`/tags/${skill.skillName}`} scroll={false}>
                    <motion.div
                      whileHover={{
                        scale: [1, 1.2, 0.9, 1.05, 1],
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block"
                    >
                      <button
                        className="px-4 py-2 mt-4 bg-slate-700 rounded-lg shadow-lg hover:bg-slate-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-700 text-base font-semibold"
                      >
                        <p className='text-white text-sm'>
                          記事を見る
                        </p>
                      </button>
                    </motion.div>
                  </Link>
                </div>
              )}
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  )
}
