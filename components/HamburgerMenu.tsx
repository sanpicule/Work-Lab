import { SetOpenTypes } from '@/types/types'
import React from 'react'

const Hamburger: React.FC<SetOpenTypes> = ({ setOpen }) => {
  return (
    <div onClick={() => setOpen(true)} className='cursor-pointer'>
      <span className='block w-8 h-[2px] rounded-md bg-gray-800'></span>
      <span className='block w-8 h-[2px] rounded-md bg-gray-800 mt-1.5'></span>
    </div>
  )
}

export default Hamburger
