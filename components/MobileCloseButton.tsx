import { SetOpenTypes } from '@/types/types'
import React from 'react'

const CloseButton: React.FC<SetOpenTypes> = ({ setOpen }) => {
  return (
    <button
      className='text-center absolute top-10 right-6'
      onClick={() => setOpen(false)}
    >
      <span className='block w-8 h-[1px] rounded-sm bg-white rotate-45'></span>
      <span className='block w-8 h-[1px] rounded-sm bg-white -rotate-45 -translate-y-[1px]'></span>
    </button>
  )
}

export default CloseButton
