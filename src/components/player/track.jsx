// import React from 'react'
import Trackimage from './trackimage'
import Tracktext from './tracktext'
import Trackauthor from './trackauthor'
import Trackalbum from './trackalbum'
import Tracktime from './tracktime'
import styles from './track.module.css'
import { useThemeContext } from '../wrapper/theme'

function Track() {
  const { theme } = useThemeContext()
  return (
    <div
      className={styles.playlist__item}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <Trackimage />
          <Tracktext />
        </div>

        <Trackauthor />
        <Trackalbum />
        <svg className={styles.track__time_svg} alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-like" />
        </svg>
        <Tracktime />
      </div>
    </div>
  )
}
export default Track
