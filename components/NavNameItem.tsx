import { NavMenuItemProps } from '@/types/types'
import Link from 'next/link'
import React from 'react'

const NavNameItem: React.FC<NavMenuItemProps> = ({ pathName, menuName }) => {
  return (
    <li className='hidden md:block'>
      <Link
        href={pathName}
        className='transition container ml-6 cursor-pointer hover:opacity-40 hover:border-b-2 border-opacity-40'
        scroll={false}
      >
        {menuName}
      </Link>
    </li>
  )
}

export default NavNameItem
