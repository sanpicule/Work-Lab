import { NavMenuItemProps } from '@/types/types'
import Link from 'next/link'
import React from 'react'

const NavNameItem: React.FC<NavMenuItemProps> = ({ pathName, menuName }) => {
  return (
    <li className='hidden md:block group transition duration-500'>
      <Link href={pathName} className='relative cursor-pointer' scroll={false}>
        {menuName}
        {/* 下線アニメーション */}
        <div className='absolute -bottom-2 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-500'></div>
      </Link>
    </li>
  )
}

export default NavNameItem
