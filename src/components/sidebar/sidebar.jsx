// import React from 'react'
import Playlist01 from './playlist01'
import Playlist02 from './playlist02'
import Playlist03 from './playlist03'
import styles from './sidebar.module.css'

function Sidebar() {
  return (
    <div className={styles.sidebar__block}>
      <div className={styles.sidebar__list}>
        <Playlist01 />
        <Playlist02 />
        <Playlist03 />
      </div>
    </div>
  )
}

export default Sidebar
