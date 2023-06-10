// import React from 'react'
import styles from './treki.module.css'
import { useThemeContext } from '../wrapper/theme'

function Treki() {
  const { theme } = useThemeContext()
  return (
    <h2
      className={styles.centerblock__h2}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      Треки
    </h2>
  )
}
export default Treki
