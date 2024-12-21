const useCustomAnimation = () => {
  const scrollFadeInFromBottom = {
    initial: {
      y: 50,
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
    viewport: { once: true },
  }
  const scrollFadeInFromTop = {
    initial: {
      y: -50,
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
    viewport: { once: true },
  }

  const menuVariants = {
    open: { x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    closed: { x: '200%', transition: { duration: 0.7, ease: 'easeInOut' } },
  }

  return {
    scrollFadeInFromBottom,
    scrollFadeInFromTop,
    menuVariants
  }
}
export default useCustomAnimation
