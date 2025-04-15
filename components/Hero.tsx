'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { caveat } from '@/utils/font'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4])
  return (
    <div className='flex w-full'>
      <div className='hidden relative h-screen w-[5%] overflow-hidden md:flex items-center justify-center'>
      </div>
      <div className='relative h-[100lvh] w-full md:w-[90%]'>
        <div ref={ref} className='h-[100lvh] w-full overflow-hidden'>
          <motion.div style={{ scale }} className='h-[100lvh] w-full'>
            <Image
              className='mx-auto object-cover brightness-50 h-[100lvh] w-full'
              src='/hero.jpg'
              alt=''
              width={2000}
              height={2000}
              quality={100}
            />
          </motion.div>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
          <h1
            className={`${caveat.className} text-5xl md:text-7xl text-center`}
          >
            Portfolio
          </h1>
        </div>
      </div>
      <div className='hidden md:flex flex-col items-center justify-center w-[5%] h-screen gap-4'>
      </div>
    </div>
  )
}

export default Hero
