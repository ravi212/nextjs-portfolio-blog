"use client"
import React from 'react'
import { Layout } from 'antd';
import ListIcon from '@mui/icons-material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import { AdminMenuType } from '@/enum/enum';
const { Header } = Layout

const Navbar = ({ toggle }: { toggle: (type: string) => void }) => {
  return (
    <Header className="bg-white shadow-xl p-10 flex items-center justify-between">
         
                <div className='flex items-center gap-6 justify-center'>
                    {/* toggle Sider */}
                    <ListIcon className='md:flex hidden cursor-pointer text-lg pt-1 w-7 h-7' onClick={() => toggle(AdminMenuType.SIDER)} />

                    {/* toggle drawer */}
                    <ListIcon className='md:hidden flex cursor-pointer text-lg pt-1 w-7 h-7' onClick={() => toggle(AdminMenuType.DRAWER)} />
                    <p className="text-2xl font-medium text-primaryColor">Ravi R.</p>
                </div>
                <div className="flex gap-3">
                    <LogoutIcon className='cursor-pointer' />
                </div>

    </Header>
  )
}

export default Navbar