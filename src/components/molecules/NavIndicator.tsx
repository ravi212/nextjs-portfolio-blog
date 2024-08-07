"use client"
import React, { useEffect } from 'react'
import { NAV_ITEMS, SOCIAL_ITEMS } from '@/constants/common'
import SocialItem from '../atoms/SocialItem'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
const NavIndicator = () => {

  const path = usePathname();

  return (
    <div
    className={`absolute items-center flex flex-col  gap-6 right-14 
        ${ NAV_ITEMS.findIndex(item => item.link == path) % 2 == 0 ? 'justify-end top-0' : 'justify-start bottom-0'} 
         h-[70%]`}>
        
            {/* vertical navigation line */}
            <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: '100%', opacity: 1 }}
                exit={{height: 0}}
                transition={{ ease: "easeInOut", duration: 1, delay: 1}}
                className='w-[.5px] bg-primaryTextColor'>
            </motion.div>

            {/* Navigation dots */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1, delay: .50}}
            className='flex flex-col gap-6 absolute'>
            {
                    NAV_ITEMS.map((item) => (
                        <div key={item.id} className={`${item.link == path ? 'bg-secondaryTextColor' : 'bg-primaryTextColor'} w-3 h-3 rounded-full `}>
                        </div>
                    ))
            }
            </motion.div>

        </div>
  )
}

export default NavIndicator