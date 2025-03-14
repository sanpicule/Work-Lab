import React from 'react'
import { useRouter } from 'next/router'
import { MobileNavItemProps } from '@/types/types'

const MobileMenuItem: React.FC<MobileNavItemProps> = ({
  pathName,
  menuName,
  setOpen,
}) => {
  const router = useRouter()
  const changePage = (path: string) => {
    router.push(path)
    setOpen(false)
  }
  return (
    <li className='w-full border-b-[1px] pb-4 pl-2' onClick={() => changePage(pathName)}>
      <p className='text-white text-lg'>{menuName}</p>
    </li>
  )
}

export default MobileMenuItem
