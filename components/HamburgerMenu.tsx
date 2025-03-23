import { SetOpenTypes } from '@/types/types'
import React from 'react'

const Hamburger: React.FC<SetOpenTypes> = ({ setOpen }) => {
  return (
    <div
      className='fixed md:hidden top-10 right-8'
      onClick={() => setOpen(true)}
    >
      <span className='block w-8 h-[2px] rounded-md bg-white'></span>
      <span className='block w-8 h-[2px] rounded-md bg-white mt-1.5'></span>
    </div>
  )
}

export default Hamburger
