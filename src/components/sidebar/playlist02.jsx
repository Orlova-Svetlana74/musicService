// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import { useState, useEffect } from 'react'
// import 'react-loading-skeleton/dist/skeleton.css'
// import React from 'react'
import PlayImg02 from './playlist01.png'
import styles from './playlist02.module.css'

function Playlist02() {
  return (
    <div className={styles.sidebar__item}>
      <a className={styles.sidebar__link} href="#">
        <img
          className={styles.sidebar__img}
          src={PlayImg02}
          alt="day's playlist"
        />
      </a>
    </div>
  )
}
export default Playlist02