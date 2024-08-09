import React, { useEffect } from 'react'
import NightsStaySharpIcon from '@mui/icons-material/NightsStaySharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
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
    <div className='flex justify-center items-center'>
        {
           theme == 'dark' 
           ? <LightModeSharpIcon className='text-primaryTextColor w-7 h-7 cursor-pointer' onClick={() => switchThemeTo(Theme.LIGHT)} /> 
           : <NightsStaySharpIcon className='text-primaryTextColor w-7 h-7 cursor-pointer' onClick={() => switchThemeTo(Theme.DARK)} />
        }
    </div>
  )
}

export default ThemeSwitch