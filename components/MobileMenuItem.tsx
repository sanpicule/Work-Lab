import React from 'react'
import { useRouter } from 'next/router'
import { MobileNavItemProps } from '@/types/types'

const MobileMenuItem: React.FC<MobileNavItemProps> = ({ pathName, menuName, setOpen }) => {
  const router = useRouter()
  const changePage = (path: string) => {
    router.push(path)
    setOpen(false)
  }
  return (
    <li
      className='w-full py-4'
      onClick={() =>  changePage(pathName)}
    >
      {menuName}
    </li>
  )
}

export default MobileMenuItem
