import React from 'react'
import NightsStaySharpIcon from '@mui/icons-material/NightsStaySharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import { Theme } from '@/enum/enum';
import useTheme from '@/hooks/useTheme';

// A theme switcher component
const ThemeSwitch = () => {
  const {theme, switchThemeTo} = useTheme();

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