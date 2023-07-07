// import React from 'react'
// import { useSelector } from 'react-redux';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilterInp } from '../../store/slices/setFilters'
import Filtr from '../player/filtr'
import Poisk from '../player/poisk'
import Treki from '../player/treki'
import Bar from '../bar/bar'
import Logo from '../menu/logo'
import Navmenu from '../menu/navmenu'
import Sidebar from '../sidebar/sidebar'
import Sidebarperson from '../sidebar/sidebarperson'
import Footer from '../footer/footer'
import styles from './wrapper.module.css'
import Track from '../player/track'
import { useTrack } from '../../hooks/use-track'
import { useGetAllTracksQuery } from '../../store/api/musicApi'

// import { UserContext } from "./contexts/user";
import { useThemeContext, themes } from './theme'

// import { setTrackPlay } from '../../store/slices/setTracks'

// function Wrapper({dataForId}) {

function Wrapper() {
  // const {naimen} = props
  const { theme } = useThemeContext()
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)
  // const [loading, setLoading] = useState(true)
  const isLight = theme === themes.light
  const themeClass = isLight ? styles.light : styles.dark
  const { data = [] } = useGetAllTracksQuery()
  let tracksData = data
  const { id } = useTrack()

  const filterAuthor = useSelector((state) => state.setFilters.author)
  const filterGenre = useSelector((state) => state.setFilters.genre)
  const filterYears = useSelector((state) => state.setFilters.years)
  switch (filterYears) {
    case 'Сначала новые':
      tracksData = tracksData
        .filter((element) => element)
        .sort(
          ({ release_date: adate }, { release_date: bdate }) =>
            new Date(adate).valueOf() - new Date(bdate).valueOf()
        )
      break
    case 'Сначала старые':
      tracksData = tracksData
        .filter((element) => element)
        .sort(
          ({ release_date: adate }, { release_date: bdate }) =>
            new Date(bdate).valueOf() - new Date(adate).valueOf()
        )
      break
    default:
      break
  }

  if (filterAuthor.length > 0) {
    tracksData = tracksData.filter(({ author }) =>
      filterAuthor.includes(author)
    )
  }
  if (filterGenre.length > 0) {
    tracksData = tracksData.filter(({ genre }) => filterGenre.includes(genre))
  }

  return (
    <div className={themeClass}>
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
                onInput={(event) => {
                  const target = event.target.value
                  dispatch(
                    setFilterInp({
                      serchInp: target,
                    })
                  )
                }}
                className={styles.search__text}
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <Treki naimen="Треки" />
            <Filtr traks={tracksData} />
            <div className={styles.centerblock__content}>
              <Poisk />
            </div>
            {tracksData.length === 0
              ? ''
              : tracksData.map((item) => (
                  <Track
                    key={item.id}
                    item={item}
                    title={item.name}
                    author={item.author}
                    album={item.album}
                    time={item.duration_in_seconds}
                    stared_user={item.stared_user}
                    id={item.id}
                  />
                ))}
            {
              // trackId ? ( <Footer id={trackId} />) :  <SkeletonFooter/>
            }
          </div>
          <div className={styles.main_sidebar}>
            <Sidebarperson />
            <Sidebar />
          </div>
        </main>
        
        {id ? <Bar traks={tracksData} /> : ''}
        <Footer />
      </div>
    </div>
  )
}
export default Wrapper
