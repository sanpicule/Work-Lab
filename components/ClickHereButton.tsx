// components/FancyButton.tsx
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

interface ClickHereButtonProps {
  text: string
  bgcolor?: string
}

const ClickHereButton: React.FC<ClickHereButtonProps> = ({
  text,
  bgcolor = 'black',
}) => {
  return (
    <div
      className={`btn relative flex items-center justify-center flex-row h-[100px] w-[300px] ${bgcolor === 'black' ? 'text-white' : 'text-black'} no-underline group`}
    >
      {/* Outer circle */}
      <div
        className={`circle absolute top-[20px] left-0 h-[60px] w-[60px] rounded-full border ${bgcolor === 'black' ? 'border-white' : 'border-black'} transform transition duration-300 group-hover:scale-0`}
      ></div>

      {/* White circle with icon */}
      <div
        className={`white-circle absolute top-[20px] left-0 h-[60px] w-[60px] rounded-full ${bgcolor === 'black' ? 'bg-white' : 'bg-black'} flex justify-center items-center transform scale-0 transition duration-300 group-hover:scale-100`}
      >
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className={`${bgcolor === 'black' ? 'text-black' : 'text-white'} text-[20px]`}
        />
      </div>

      {/* Button Text */}
      <span className='text ml-[-150px] text-[16px] z-[2] transition-all duration-300 md:group-hover:ml-[-70px]'>
        {text}
      </span>
    </div>
  )
}

export default ClickHereButton
