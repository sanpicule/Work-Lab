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

      gsap.to(container, {
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
      })

      // スクロール時の軽いパララックスエフェクト
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

    // ページ遷移時にスクロールをトップに戻す
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [router.pathname])

  return (
    <div className='body relative w-screen'>
      <div className='flex flex-col w-screen'>
        <NavBar />
        <AnimatePresence mode='wait'>
          <motion.div
            key={router.pathname}
            initial={{ opacity: 0, scale: 0.95, rotateX: 15, y: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, rotateX: -15, y: -20 }}
            transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
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
