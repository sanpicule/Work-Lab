import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutProps } from '@/types/types'
import { useRouter } from 'next/router'

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()

  // ページ全体のコンテナアニメーション - より滑らかでゆっくり
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8, // 長くした
        ease: [0.2, 0.65, 0.3, 1.0], // よりスムーズなイージング
        when: 'beforeChildren',
        staggerChildren: 0.2, // 少し長めの間隔
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.7, // 長くした
        ease: [0.43, 0, 0.53, 0.94], // 出口用のカスタムイージング
        when: 'afterChildren',
        staggerChildren: 0.08,
        staggerDirection: -1,
      },
    },
  }

  // 子要素のアニメーション - よりゆっくりに
  const childVariants = {
    initial: {
      y: 30, // 少し長めの距離
      opacity: 0,
      scale: 0.97,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.0, // かなり長くした
        ease: [0.25, 0.1, 0.25, 1.0], // より滑らかなイージング
      },
    },
    exit: {
      y: -15,
      opacity: 0,
      scale: 0.97,
      transition: {
        duration: 0.6, // 長くした
        ease: [0.43, 0, 0.53, 0.94],
      },
    },
  }

  // ページトランジションオーバーレイ - よりゆっくりに
  const overlayVariants = {
    initial: { scaleY: 0, originY: 0 },
    animate: {
      scaleY: [0, 1, 1, 0],
      originY: [0, 0, 1, 1],
      transition: {
        times: [0, 0.4, 0.6, 1],
        duration: 1.2, // かなり長くした
        ease: [0.7, 0, 0.3, 1], // より洗練されたイージング
      },
    },
  }

  return (
    <div className='body relative w-full'>
      <AnimatePresence mode='wait'>
        {/* ページ遷移オーバーレイ */}
        <motion.div
          key={`overlay-${router.pathname}`}
          initial='initial'
          animate='animate'
          variants={overlayVariants}
          className='fixed inset-0 z-50 bg-gradient-to-br from-blue-500 to-purple-500'
        />

        <div className='flex flex-col'>
          <NavBar />

          <motion.div
            key={router.pathname}
            initial='initial'
            animate='animate'
            exit='exit'
            variants={pageVariants}
            className='min-h-screen bg-[#2e2e2e] shadow-lg relative'
          >
            {/* コンテンツをChildWrapperでラップする必要があります */}
            <main className='items-stretch'>
              <ChildWrapper variants={childVariants}>{children}</ChildWrapper>
            </main>
          </motion.div>

          <Footer />
        </div>
      </AnimatePresence>
    </div>
  )
}

// 子要素をラップするためのコンポーネント
const ChildWrapper: React.FC<{
  children: React.ReactNode
  variants: any
}> = ({ children, variants }) => {
  return <motion.div variants={variants}>{children}</motion.div>
}

// コンテンツ内の個別要素用のコンポーネント - よりゆっくりに
export const ContentItem: React.FC<{
  children: React.ReactNode
  delay?: number
}> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 1 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.0, // 長くした
          ease: [0.25, 0.1, 0.25, 1.0], // より滑らかなイージング
          delay: delay * 1.5, // 遅延も長くした
        },
      }}
      exit={{
        y: -15,
        opacity: 0,
        transition: {
          duration: 0.6, // 長くした
          ease: [0.43, 0, 0.53, 0.94],
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default Layout
