import { useEffect, useState } from 'react'

const fullText = 'To be an engineer \nwho supports the acceleration of business'

export interface PreloaderProps {
  setIsLoading: (isLoading: boolean) => void
}

const Preloader = ({ setIsLoading }: PreloaderProps) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    const delay = 1000 // 表示開始のディレイ（2秒）

    const startTyping = () => {
      let index = 0
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + fullText[index])
        index++
        if (index === fullText.length) {
          clearInterval(interval)
          // タイピング終了後にローディング非表示
          setTimeout(() => {
            setIsLoading(false)
          }, 1000) // タイピング後1秒待機してからフェードアウト
        }
      }, 50)
    }

    const timeout = setTimeout(startTyping, delay)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black/70 via-black/80 to-black/70 transition-opacity duration-1000'
    >
      <p className='whitespace-pre-line text-center text-xl md:text-3xl font-thin max-w-xl p-4 text-white'>
        {displayedText}
        <span className='animate-pulse'>|</span>
      </p>
    </div>
  )
}

export default Preloader
