import useCustomAnimation from '@/hooks/useCustomAnimation'
import { motion } from 'framer-motion'

type SectionTitleProps = {
  title: string
  color?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  color = 'white',
}) => {
  const customAnimate = useCustomAnimation()
  return (
    <motion.div
      variants={customAnimate.scrollFadeInFromTop}
      initial={customAnimate.scrollFadeInFromTop.initial}
      whileInView={customAnimate.scrollFadeInFromTop.whileInView}
      viewport={customAnimate.scrollFadeInFromTop.viewport}
      className='flex items-center gap-4 w-full'
    >
      <h2 className='tracking-widest text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
        {title}
      </h2>
    </motion.div>
  )
}

export default SectionTitle
