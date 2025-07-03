import useCustomAnimation from '@/hooks/useCustomAnimation'
import { motion } from 'framer-motion'

type SectionTitleProps = {
  title: string
  color?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  color = 'gray-800',
}) => {
  const customAnimate = useCustomAnimation()
  return (
    <motion.div
      variants={customAnimate.scrollFadeInFromTop}
      initial={customAnimate.scrollFadeInFromTop.initial}
      whileInView={customAnimate.scrollFadeInFromTop.whileInView}
      viewport={customAnimate.scrollFadeInFromTop.viewport}
      className='flex items-center gap-4 w-full mb-8'
    >
      <div className='flex-1 h-px bg-gray-300'></div>
      <h2
        className={`tracking-wide text-2xl md:text-3xl font-bold text-center text-${color} px-4`}
      >
        {title}
      </h2>
      <div className='flex-1 h-px bg-gray-300'></div>
    </motion.div>
  )
}

export default SectionTitle
