import React from 'react'
import PlayImg03 from './playlist03.png'
import styles from './playlist03.module.css'

function Playlist03() {
  return (
    <div className={styles.sidebar__item}>
      <a className={styles.sidebar__link} href="#">
        <img
          className={styles.sidebar__img}
          src={PlayImg03}
          alt="day's playlist"
        />
      </a>
    </div>
  )
}
export default Playlist03
