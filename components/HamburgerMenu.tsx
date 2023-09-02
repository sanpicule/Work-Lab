import { SetOpenTypes } from '@/types/types'
import React from 'react'

const Hamburger: React.FC<SetOpenTypes> = ({ setOpen }) => {
  return (
    <div className='md:hidden' onClick={() => setOpen(true)}>
      <span className='block w-8 h-1 rounded-sm bg-white'></span>
      <span className='block w-8 h-1 rounded-sm bg-white mt-1.5'></span>
      <span className='block w-8 h-1 rounded-sm bg-white mt-1.5'></span>
    </div>
  )
}

export default Hamburger
