// import React from 'react'
import { NavLink } from 'react-router-dom'
import PlayImg01 from './playlist01.png'
import styles from './playlist01.module.css'


function Playlist01() {
  return (
    <div className={styles.sidebar__item}>
      <NavLink to ="./usertrack">gfgf</NavLink>
        <img
          className={styles.sidebar__img}
          src={PlayImg01}
          alt="day's playlist"
        />
      
    </div>
  )
}
export default Playlist01
