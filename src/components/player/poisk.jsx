import React from 'react'
import styles from './poisk.module.css'

function Poisk() {
  return (
    <div className={styles.content__title}>
      <div className={styles.playlist_title__col01}>Трек</div>
      <div className={styles.playlist_title__col02}>ИСПОЛНИТЕЛЬ</div>
      <div className={styles.playlist_title__col03}>АЛЬБОМ</div>
      <div className={styles.playlist_title__col04}>
        <svg className={styles.playlist_title__svg} alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch" />
        </svg>
      </div>
    </div>
  )
}
export default Poisk
