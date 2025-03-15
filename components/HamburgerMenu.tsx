import { SetOpenTypes } from '@/types/types'
import React from 'react'

const Hamburger: React.FC<SetOpenTypes> = ({ setOpen }) => {
  return (
    <div
      className='md:hidden w-full h-full py-3 px-4 rounded-[100px] bg-[#2e2e2e]/90'
      onClick={() => setOpen(true)}
    >
      <span className='block w-6 h-[1px] rounded-sm bg-white'></span>
      <span className='block w-6 h-[1px] rounded-sm bg-white mt-1.5'></span>
    </div>
  )
}

export default Hamburger
