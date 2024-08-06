"use client"
import ThemeSwitch from '@/components/atoms/ThemeSwitch'
import dynamic from 'next/dynamic'
import React from 'react'
import NavItem from '../atoms/NavItem'
import { NAV_ITEMS } from '@/constants/common'
// const ThemeSwitcher = lazy(() => import("@/components/molecules/ThemeSwitch"));
// or
const ThemeSwitcher = dynamic(() => import("@/components/atoms/ThemeSwitch"), {
    ssr: false
  })
const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between py-10'>
        <ThemeSwitch />
        <div className='flex flex-row items-center uppercase'>
          <nav className='flex gap-7'>
            {
              NAV_ITEMS.map((item, index) => (
                <NavItem key={index} title={item.title} link={item.link} />
              ))
            }
          </nav>
          <span className='border cursor-pointer ml-5 px-4 py-2 border-secondaryTextColor text-secondaryTextColor rounded-lg'>
            Resume
          </span>
        </div>

    </div>
  )
}

export default Navbar