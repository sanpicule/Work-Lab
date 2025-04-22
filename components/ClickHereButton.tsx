// components/FancyButton.tsx
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
    <div
      className={`
        btn relative flex items-center justify-center flex-row 
        h-[100px] w-[300px] ${isDark ? 'text-white' : 'text-black'} 
        no-underline group 
        active:scale-[0.97] transition-transform duration-150 ease-in-out
      `}
    >
      {/* Outer circle - スマホでは非表示 */}
      <div
        className={`
          circle absolute top-[20px] left-0 h-[60px] w-[60px] 
          rounded-full border ${isDark ? 'border-white' : 'border-black'} 
          transform transition duration-300 group-hover:scale-0 hidden md:block
        `}
      ></div>

      {/* White circle with icon - スマホでは常に表示、タップ時に色変化 */}
      <div
        className={`
          white-circle absolute top-[20px] left-0 h-[60px] w-[60px] 
          rounded-full bg-gradient-to-r from-blue-400 to-purple-500
          flex justify-center items-center transform scale-100 md:scale-0 
          transition duration-300 md:group-hover:scale-100 
          active:${isDark ? 'bg-gray-300' : 'bg-gray-300'}
        `}
      >
        <div className='text-white'>
          <ArrowForwardIcon />
        </div>
      </div>

      {/* Button Text - スマホでは左寄せ */}
      <span className='text ml-[-70px] md:ml-[-150px] text-[16px] z-[2] transition-all duration-300 md:group-hover:ml-[-70px]'>
        {text}
      </span>
    </div>
  )
}

export default ClickHereButton
