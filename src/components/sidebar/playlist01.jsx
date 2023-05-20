import React from 'react'
import PlayImg01 from './playlist01.png'
import styles from './playlist01.module.css'

function Playlist01() {
  return (
    <div className={styles.sidebar__item}>
      <a className={styles.sidebar__link} href="#">
        <img
          className={styles.sidebar__img}
          src={PlayImg01}
          alt="day's playlist"
        />
      </a>
    </div>
  )
}
export default Playlist01
