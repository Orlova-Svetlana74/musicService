// import React from 'react'
import LogoImg from './logo1.png'
import { useThemeContext } from '../wrapper/theme'

function Logo() {
  const { theme } = useThemeContext()
  // используем LogoImg в атрибуте src
  return (
    <img
      src={LogoImg}
      alt="logo"
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    />
  )
}

export default Logo
