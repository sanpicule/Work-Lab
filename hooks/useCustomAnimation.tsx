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
    open: {
      opacity: 1,
      display: 'flex',
      transition: {
        opacity: { duration: 0.5, ease: 'easeInOut' },
        display: { delay: 0 },
      },
    },
    closed: {
      opacity: 0,
      display: 'none',
      transition: {
        opacity: { duration: 0.5, ease: 'easeInOut' },
        display: { delay: 0.5 },
      },
    },
  }

  return {
    scrollFadeInFromBottom,
    scrollFadeInFromTop,
    menuVariants,
  }
}
export default useCustomAnimation
