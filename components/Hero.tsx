'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { caveat } from '@/utils/font'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4])
  return (
    <div className='flex w-full h-[100lvh]'>
      <div className='relative overflow-hidden w-full mx-auto md:w-full'>
        <div ref={ref}>
          <motion.div style={{ scale }} className='h-[100lvh] brightness-50'>
            <Image
              className='mx-auto object-cover w-full h-full'
              src='/hero.jpg'
              alt=''
              width={2000}
              height={2000}
              quality={100}
            />
          </motion.div>
        </div>
        <div className='w-[60%] absolute flex flex-col justify-start items-start gap-2 md:gap-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
          <h1
            className={`${caveat.className} text-5xl md:text-9xl text-center`}
          >
            Portfolio
          </h1>
          <p className='text-start mt-2 text-xl md:text-4xl font-thin'>
            To be an engineer <br></br>who supports the acceleration of business
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
