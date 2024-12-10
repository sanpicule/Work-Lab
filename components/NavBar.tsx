import { siteConfig } from '@/site.config'
import Link from 'next/link'
import React, { useState } from 'react'
import { navMenuList } from '@/utils/data'
import NavNameItem from './NavNameItem'
import MobileMenuItem from './MobileMenuItem'
import Hamburger from './HamburgerMenu'
import CloseButton from './MobileCloseButton'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed z-10 w-full flex h-[60px] flex-wrap items-center justify-between py-3 navbar navbar-expand-lg navbar-light bg-white text-slate-700 font-serif">
      <div className="container-fluid w-full flex items-center justify-between px-6">
        <div
          className="bg-grey-light rounded-md w-1/3"
          aria-label="breadcrumb"
        >
          <Link href="/" scroll={false}>
            <h5
              className="text-lg text-slate-700 lg:text-xl xl:text-2xl"
            >
              {siteConfig.title}
            </h5>
          </Link>
        </div>
        <ul className='flex items-center justify-end w-2/3'>
          {navMenuList.map((navMenu) => (
            <NavNameItem
              key={navMenu.id}
              pathName={navMenu.pathName}
              menuName={navMenu.menuName}
            />
          ))}
          <Hamburger setOpen={setOpen}/>
        </ul>
      </div>

      {/* スマホ時のメニュー */}
      <div className={`${open ? 'transition ease-in-out translate-y-0 duration-300' : 'transition translate-x-[200%] ease-in-out duration-700'} p-4 fixed top-0 right-0 w-[40%] h-[60%] bg-black opacity-90`}>
        <ul className='w-full mt-10'>
          {navMenuList.map((navMenu) => (
            <MobileMenuItem
              key={navMenu.id}
              setOpen={setOpen}
              pathName={navMenu.pathName}
              menuName={navMenu.menuName}
            />
          ))}
        </ul>
        <CloseButton
          setOpen={setOpen}
        />
      </div>
    </nav>
  )
}

export default NavBar
