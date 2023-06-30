// import React from 'react'
// import { useSelector } from 'react-redux';
import { useState } from 'react'
import Filtr from '../player/filtr'
import Track from '../player/track'
import Poisk from '../player/poisk'
import Treki from '../player/treki'
import Bar from '../bar/bar'
import Logo from '../menu/logo'
import Navmenu from '../menu/navmenu'
import Sidebar from '../sidebar/sidebar'
import Sidebarperson from '../sidebar/sidebarperson'
import Footer from '../footer/footer'
import styles from './wrapper.module.css'
// import { UserContext } from "./contexts/user";
import { useThemeContext, themes } from './theme'
import { useGetAllTracksQuery } from '../../store/api/musicApi'

// import { setTrackPlay } from '../../store/slices/setTracks'

// function Wrapper({dataForId}) {

function Wrapper() {
  // const {naimen} = props
  const { theme } = useThemeContext()
  const [user, setUser] = useState(null)
  // const [loading, setLoading] = useState(true)
  const isLight = theme === themes.light
  const themeClass = isLight ? styles.light : styles.dark
  // let tracksData = []
  // tracksData = dataForId[0].items
  // const selector = useSelector(setTrackPlay);
  // const {trackId} = selector.payload.track

  const { data = [] } = useGetAllTracksQuery()
  const tracksData = data
  console.log ([data] )

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
            <Treki naimen="Треки" />
            <Filtr />
            <div className={styles.centerblock__content}>
              <Poisk />
              <div className={styles.content__playlist}>
                {/* <Track />  */}
                {tracksData.length === 0 ? '' :
                tracksData.map((track) => (
                  <Track
                    key={track.id}
                    title={track.name}
                    author={track.author}
                    album={track.album}
                    time={track.duration_in_seconds}
                    stared_user={track.stared_user}
                    id={track.id}
                  />
                ))}
              
              </div>

            </div>
            {
              // trackId ? ( <Footer id={trackId} />) :  <SkeletonFooter/>
            }
          </div>
          <div className={styles.main_sidebar}>
            <Sidebarperson />
            <Sidebar />
          </div>
        </main>
        <Bar tracks = {tracksData} />
        <Footer />
      </div>
    </div>
  )
}
export default Wrapper  