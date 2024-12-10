import React, { useState } from 'react'
import { siteConfig } from '@/site.config'
import Image from 'next/image'
import { skillList } from '@/utils/data'
import { Skill } from '@/types/types'
import { motion } from "framer-motion";
import styles from '../styles/styles.module.css'

export const Skills = () => {
  const [isOpen, setIsOpen] = useState(false)
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
              </motion.div>
              {isOpen && checkTarget(skill) && (
                <p className={styles.child2}>{skill.description}</p>
              )}
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  )
}
