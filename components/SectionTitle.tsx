import useCustomAnimation from '@/hooks/useCustomAnimation'
import { caveat } from '@/utils/font';
import { motion } from 'framer-motion'

type SectionTitleProps = {
  title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  const customAnimate = useCustomAnimation()
  return (
    <motion.div
      variants={customAnimate.scrollFadeInFromTop}
      initial={customAnimate.scrollFadeInFromTop.initial}
      whileInView={customAnimate.scrollFadeInFromTop.whileInView}
      viewport={customAnimate.scrollFadeInFromTop.viewport}
      className='flex items-center gap-4'
    >
      <p className={`${caveat.className} text-4xl md:text-6xl tracking-wider font-extralight font-serif`}>{title}</p>
    </motion.div>
  )
}

export default SectionTitle
