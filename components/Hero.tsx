'use client'

import { motion } from 'framer-motion'
import { HeroProps } from '@/types/types'

const Hero = ({ title, subtitle }: HeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center w-full min-h-screen bg-white text-gray-800 text-center px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
        variants={itemVariants}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-2xl"
        variants={itemVariants}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  )
}

export default Hero
