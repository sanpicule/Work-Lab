import useCustomAnimation from '@/hooks/useCustomAnimation'
import { caveat } from '@/utils/font'
import { motion } from 'framer-motion'

type SectionTitleProps = {
  title: string,
  color?: string,
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, color = 'white' }) => {
  const customAnimate = useCustomAnimation()
  return (
    <motion.div
      variants={customAnimate.scrollFadeInFromTop}
      initial={customAnimate.scrollFadeInFromTop.initial}
      whileInView={customAnimate.scrollFadeInFromTop.whileInView}
      viewport={customAnimate.scrollFadeInFromTop.viewport}
      className='flex items-center gap-4 w-full'
    >
      <h2 className={`text-lg tracking-widest font-semibold mb-4 md:mb-6 whitespace-nowrap text-${color}`}>
        {title}
      </h2>
      <span className={`flex-1 h-[2px] bg-${color} mb-4 md:mb-6`}></span>
    </motion.div>
  )
}

export default SectionTitle
