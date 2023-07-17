import { useState } from 'react'
import { useSelector } from 'react-redux'
// import Filtr from '../../components/player/filtr'
import Track from '../../components/player/track'
import Poisk from '../../components/player/poisk'
import Treki from '../../components/player/treki'
import Bar from '../../components/bar/bar'
import Logo from '../../components/menu/logo'
import Navmenu from '../../components/menu/navmenu'
// import Sidebar from '../sidebar/sidebar'
import Sidebarperson from '../../components/sidebar/sidebarperson'
// import Footer from '../footer/footer'
import styles from './playindyhit.module.css'
// import { UserContext } from "./contexts/user";
import { useThemeContext, themes } from '../../components/wrapper/theme'
import { useGetAllTracksQuery } from '../../store/api/musicApi'

function Playlist100hit() {
  const { theme } = useThemeContext()
  const [user, setUser] = useState(null)
  const isLight = theme === themes.light
  const themeClass = isLight ? styles.light : styles.dark
  const { data = [] } = useGetAllTracksQuery()
  const tracksData = data
  const { trackId } = useSelector((state) => state.user);

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
            <Treki naimen="Инди заряд" />
            {/* <Filtr /> */}
            <div className={styles.centerblock__content}>
              <Poisk />
              <div className={styles.scrollbar}>
              <div className={styles.content__playlist}>
                {tracksData.map((item) => (
                  <Track
                    key={item.id}
                    title={item.name}
                    author={item.author}
                    album={item.album}
                    time={item.duration_in_seconds}
                    stared_user={item.stared_user}
                    id={item.id}
                  />
                ))}
              </div>
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
        {trackId ? (<Bar id={trackId} />) : ''}
        {/* <Footer /> */}
      </div>
    </div>
  )
}
export default Playlist100hit
