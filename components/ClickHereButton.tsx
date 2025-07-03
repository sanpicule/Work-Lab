// components/FancyButton.tsx
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

interface ClickHereButtonProps {
  text: string
  bgcolor?: string
}

const ClickHereButton: React.FC<ClickHereButtonProps> = ({
  text,
  bgcolor = 'black',
}) => {
  const isDark = bgcolor === 'black'

  return (
    <button
      className={`
        relative group overflow-hidden
        px-6 py-3 md:py-4 md:px-8 mt-8 mx-auto
        rounded-full w-[240px] md:w-[300px]
        font-semibold text-sm md:text-base
        flex items-center justify-center gap-3
        backdrop-blur-lg transition-all
        duration-300 ease-in-out shadow-lg
        bg-gray-800 text-white
        hover:bg-gray-900 active:scale-95
      `}
    >
      {/* Hover Overlay */}
      <span
        className='absolute inset-0 z-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-gray-700 to-gray-900 transition-opacity duration-300'
        aria-hidden='true'
      ></span>

      {/* Text */}
      <span className='relative z-10 whitespace-nowrap group-hover:text-white transition-colors duration-300'>
        {text}
      </span>
    </button>
  )
}

export default ClickHereButton
