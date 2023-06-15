// import React from 'react'
import { useContext } from 'react'
import LogoImglight from './logo1.png'
import LogoImgblack from './logo.png'
// import { useState } from 'react'

import { ThemeContext, themes } from '../wrapper/theme'

function Logo() {
  // const [logo, setCurrentTheme] = useState

  // const logo = isPlaying ? {LogoImg1} : {LogoImg}
  // const { theme } = useThemeContext()
  // используем LogoImg в атрибуте src
  const { theme } = useContext(ThemeContext)

  return (
    <img src={theme === themes.dark ? LogoImglight : LogoImgblack} alt="logo" />
  )
}

export default Logo