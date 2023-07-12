// import React from 'react'
import styles from './trackimage.module.css'
import { useThemeContext } from '../wrapper/theme'
import sprite from '../../img/icon/sprite.svg'


function Trackimage({onClick}) {
  const { theme } = useThemeContext()
  
  return (
    <div
      className={styles.track__title_image}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <svg className={styles.track__title_svg} onClick={onClick} alt="music">
        {/* <use xlinkHref="img/icon/sprite#icon-note" /> */}
        <use xlinkHref={`${sprite}#icon-note`} />
      </svg>
    </div>
  )
}
export default Trackimage
