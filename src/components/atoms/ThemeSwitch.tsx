import React, { useEffect } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { Theme } from '@/enum/Theme';
import useTheme from '@/hooks/useTheme';

// A theme switcher component
const ThemeSwitch = () => {
  const {theme, switchThemeTo} = useTheme();
  
  // check theme on first render and switch according to users browser preference or stored user theme
  useEffect(() => {
    const userTheme = localStorage.getItem(Theme.TEXT);
    const systemTheme = matchMedia("(prefers-color-scheme: dark)").matches;

    if (userTheme) {
        switchThemeTo(userTheme)
    } else {
        localStorage.setItem(Theme.TEXT, systemTheme ? Theme.DARK : Theme.LIGHT)
        systemTheme ? switchThemeTo(Theme.DARK) : switchThemeTo(Theme.LIGHT)
    }
  }, [])

  return (
    <div>
        {
           theme == 'dark' 
           ? <IoSunnyOutline className='text-white w-10 h-10 cursor-pointer' onClick={() => switchThemeTo(Theme.LIGHT)} /> 
           : <BsMoonStarsFill className='text-primaryText w-10 h-10 cursor-pointer' onClick={() => switchThemeTo(Theme.DARK)} />
        }
    </div>
  )
}

export default ThemeSwitch