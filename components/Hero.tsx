import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  return (
    <div className='relative h-screen w-full'>
      <div ref={ref} className='h-full w-full overflow-hidden'>
        <motion.div style={{ scale }} className='h-full w-full'>
          <Image
            className='mx-auto object-cover brightness-50 h-full w-full'
            src='/hero.jpg'
            alt=''
            width={2000}
            height={2000}
            quality={100}
          />
        </motion.div>
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
        <h1 className='font-bold text-5xl md:text-7xl text-center'>Sanpi Company</h1>
        {/* TODO リンクは後で設定する */}
        <div className='flex flex-col md:flex-row justify-center gap-8 mt-8'>
          <motion.button
            className='flex items-center justify-center gap-2 bg-[#17afc6] text-white px-8 py-4 rounded-md '
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <p className='font-bold'>仕事を依頼する</p>
            <FaArrowUpRightFromSquare />
          </motion.button>
          <motion.button
            className='bg-white text-slate-800 px-8 py-4 rounded-md font-bold'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            実績を見る
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Hero
