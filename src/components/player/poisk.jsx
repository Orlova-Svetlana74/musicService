// import React from 'react'
import styles from './poisk.module.css'
import sprite from '../../img/icon/sprite.svg'
// import { useThemeContext } from '../wrapper/theme'

function Poisk() {
  // const { theme } = useThemeContext()
  return (
    <div
      className={styles.content__title}
      // style={{
      //   backgroundColor: theme.background,
      //   color: theme.color,
      // }}
    >
      <div className={styles.playlist_title__col01}>Трек</div>
      <div className={styles.playlist_title__col02}>ИСПОЛНИТЕЛЬ</div>
      <div className={styles.playlist_title__col03}>АЛЬБОМ</div>
      <div className={styles.playlist_title__col04}>
        <svg className={styles.playlist_title__svg} alt="time">
          <use xlinkHref={`${sprite}#icon-watch`} />
        </svg>
      </div>
    </div>
  )
}
export default Poisk
