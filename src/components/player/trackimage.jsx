// import React from 'react'
import styles from './trackimage.module.css'

function Trackimage() {
  return (
    <div className={styles.track__title_image}>
      <svg className={styles.track__title_svg} alt="music">
        {/* <use xlinkHref="img/icon/sprite#icon-note" /> */}
        <use xlinkHref="img/icon/sprite#icon-note" />
      </svg>
    </div>
  )
}
export default Trackimage
