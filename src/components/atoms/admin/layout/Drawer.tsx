"use client"
import React from 'react'
import { Drawer } from 'antd'
import CloseIcon from '@mui/icons-material/Close';

const SideDrawer = ({isOpen, onClose}: SideMenuProps) => {
  return (
    <Drawer
        placement="left"
        width={320}
        open={isOpen}
        closeIcon={false}
        mask={false}
        style={{backgroundColor: 'rgba(14, 31, 57)'}}
    >

        <div className='px-3'>
            <div className='flex justify-between items-start py-4'>
                <div className='flex items-center justify-center'>
                    <p className="text-2xl font-medium text-primaryColor text-white">Ravi R.</p>
                    {/* <p className="text-lg font-normal text-primaryColor">(Admin Panel)</p> */}
                </div>
                <CloseIcon className='cursor-pointer text-white' onClick={onClose} />
            </div>

            <ul className='py-10 flex flex-col items-center'>
                <li className='p-2 w-full rounded-lg text-center text-lg font-normal text-white hover:text-white hover:bg-red-400 bg-red-500 cursor-pointer transition-all duration-100'>Dashboard</li>
            </ul>
        </div>



    </Drawer>
  )
}

export default SideDrawer