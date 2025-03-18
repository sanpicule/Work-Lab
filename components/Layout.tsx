import React, { useEffect, useRef } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutProps } from '@/types/types'
import { useRouter } from 'next/router'

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import('gsap')).default
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
      gsap.registerPlugin(ScrollTrigger)

      const container = containerRef.current
      if (!container) return

      // 軽いパララックスエフェクトのみ適用（opacity のアニメーションは Framer Motion に任せる）
      gsap.to(container, {
        scrollTrigger: {
          trigger: container,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      })
    }

    loadGSAP()

    // ページ遷移時にスクロールをトップに戻す（遅延を加えることでちらつきを防止）
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' }) // `smooth` だと遷移時に余計なアニメーションが発生する
    }, 50)
  }, [router.pathname])

  return (
    <div className='body relative w-screen'>
      <div className='flex flex-col w-screen'>
        <NavBar />
        <AnimatePresence mode='wait'>
          <motion.div
            key={router.pathname}
            initial={{ opacity: 0, scale: 1, rotateX: 10, y: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 1, rotateX: -5, y: -10 }} // 変化を小さくすることでチラつきを抑制
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className='w-screen min-h-screen bg-[#f2f2f2d1] shadow-lg rounded-xl'
            ref={containerRef}
          >
            <main>{children}</main>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
