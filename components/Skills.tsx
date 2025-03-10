import React from 'react'
import { siteConfig } from '@/site.config'
import Image from 'next/image'
import { skillList } from '@/utils/data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import useCustomAnimation from '@/hooks/useCustomAnimation'
import SectionTitle from './SectionTitle'

export const Skills = () => {
  const customAnimate = useCustomAnimation()

  return (
    <div className='w-full bg-[#2e2e2e] shadow-[0px_0px_15px_2px_#000]'>
      <div className='max-w-6xl mx-auto w-full h-screen flex flex-col rounded-[40px] py-8 md:py-40 px-8 md:px-20 justify-center'>
        <div className='text-white border-b-2 border-[#17afc6]'>
          <SectionTitle title={siteConfig.language} />
        </div>
        <motion.ul
          variants={customAnimate.scrollFadeInFromBottom}
          initial={customAnimate.scrollFadeInFromBottom.initial}
          whileInView={customAnimate.scrollFadeInFromBottom.whileInView}
          viewport={customAnimate.scrollFadeInFromBottom.viewport}
          className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-8 md:mt-12'
        >
          {skillList.map((skill) => (
            <li key={skill.skillName} className='mx-auto w-full h-full'>
              <Link href={`/tags/${skill.skillName}`} scroll={false} className='block h-full'>
                <motion.div
                  whileHover={{ scale: 1.10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className='flex flex-col items-center p-4 bg-white rounded-xl text-[#464545] h-full shadow-2xl'
                >
                  <div className='w-16 h-16 md:w-20 md:h-20 flex items-center justify-center'>
                    <Image
                      src={skill.imageUrl}
                      alt={skill.skillName}
                      width={70}
                      height={70}
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <h3 className='mt-3 text-center font-medium'>{skill.skillName}</h3>
                  <div className='flex-grow flex items-center'>
                    <p className='text-xs mt-2 text-center text-[#464545] line-clamp-3'>
                      {skill.description.substring(0, 50)}...
                    </p>
                  </div>
                </motion.div>
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}