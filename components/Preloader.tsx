import { useEffect, useState } from 'react'

export interface PreloaderProps {
  setIsLoading: (isLoading: boolean) => void
}

const Preloader = ({ setIsLoading }: PreloaderProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 400)
          return 100
        }
        return prev + 2 // 2ずつ進めて1.5〜2秒で完了
      })
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#7D4ECF] to-[#CD47DF]">
      <div className="text-white text-lg tracking-widest font-light mb-6">
        Loading {progress}%
      </div>
      <div className="w-64 h-1.5 bg-white/20 rounded-full overflow-hidden relative">
        <div
          className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
        <div className="absolute top-0 left-0 h-full w-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>
    </div>
  )
}
export default Preloader
