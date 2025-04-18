import useCustomAnimation from '@/hooks/useCustomAnimation'
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
      <h2 className={`text-lg lg:text-xl tracking-[1rem] font-semibold mb-4 md:mb-6 whitespace-nowrap ${color === 'black' ? 'text-[#2e2e2e]' : 'text-[#eee]'}`}>
        {title}
      </h2>
      <span className={`flex-1 h-[1px] ${color === 'black' ? 'bg-[#2e2e2e]' : 'bg-[#eee]'} mb-4 md:mb-6`}></span>
    </motion.div>
  )
}

export default SectionTitle
