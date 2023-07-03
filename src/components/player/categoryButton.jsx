// import React from 'react'
import styles from './categoryButton.module.css'
// import { themes, useThemeContext } from '../wrapper/theme'

// const { theme } = useThemeContext()
// const isLight = theme === themes.light
// const themeClass = isLight ? styles.light : styles.dark

export function CategoryButton({ category, isActive, onClick }) {
  return (
    <button
      type="button"      
      className={`${styles.filter__button} ${
        isActive ? styles.active : ''
      } `}
      onClick={onClick}
    >
      {category}
    </button>
  )
}


