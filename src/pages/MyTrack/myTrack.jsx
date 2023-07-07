import { useState } from 'react'
// import Filtr from '../../components/player/filtr'
import TrackFavorit from '../../components/player/trackFavorit'
import Poisk from '../../components/player/poisk'
import Treki from '../../components/player/treki'
import Bar from '../../components/bar/bar'
import Logo from '../../components/menu/logo'
import Navmenu from '../../components/menu/navmenu'
// import Sidebar from '../sidebar/sidebar'
import Sidebarperson from '../../components/sidebar/sidebarperson'
// import Footer from '../footer/footer'
import styles from './myTrack.module.css'
// import { UserContext } from "./contexts/user";
import { useThemeContext, themes } from '../../components/wrapper/theme'
import { useGetAllTracksQuery } from '../../store/api/musicApi'
// import {useTrack} from "../../hooks/use-track"

function MyTrack() {
    
  const { theme } = useThemeContext()
  const [user, setUser] = useState(null)
  const isLight = theme === themes.light
  const themeClass = isLight ? styles.light : styles.dark
  const { data = [] } = useGetAllTracksQuery()
  // const {id} = useTrack();
  const TRACKS = data;

  return (
    <div
      // className={styles.wrapper}
      className={themeClass}
      // style={{
      //   backgroundColor: theme.background,
      //   color: theme.color,
      // }}
    >
      <div
        className={styles.container}
        style={{
          backgroundColor: theme.background,
          color: theme.color,
        }}
      >
        <main className={styles.main}>
          <nav className={styles.main__nav}>
            <Logo />
            <Navmenu user={user} setUser={setUser} />
          </nav>
          <div className={styles.main__centerblock}>
            <div className={styles.centerblock__search}>
              <svg className={styles.search__svg}>
                <use xlinkHref="img/icon/sprite.svg#icon-search" />
              </svg>
              <input
                className={styles.search__text}
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <Treki naimen="Мои треки" />
            {/* <Filtr /> */}
            <div className={styles.centerblock__content}>
              <Poisk />
              <div className={styles.content__playlist}>                
                  <TrackFavorit                    
                  />               
              </div>
            </div>
            {
              // trackId ? ( <Footer id={trackId} />) :  <SkeletonFooter/>
            }
          </div>
          <div className={styles.main_sidebar}>
            <Sidebarperson />
            {/* <Sidebar /> */}
          </div>
        </main>
        
        <Bar 
        tracks = {TRACKS} />
        
        {/* <Footer /> */}
      </div>
    </div>
  )
}
export default MyTrack
