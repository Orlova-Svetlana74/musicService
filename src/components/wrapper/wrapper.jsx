// import React from 'react'
import { useState,useMemo } from 'react'
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
// import { ThemeSwitcher } from '.menu/themeswitcher'

import { ThemeContext, themes } from './theme'
// import { useThemeContext } from "../contexts/theme";

function Wrapper() {
  const [user, setUser] = useState(null)
  const [currentTheme, setCurrentTheme] = useState(themes.light)
  // const theme = useThemeContext;
  
  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }
    setCurrentTheme(themes.dark)
  }
  const valueTheme = useMemo(
    () => ({ theme: currentTheme, toggleTheme }),
    [currentTheme]
  )
  return (
    <ThemeContext.Provider value={valueTheme}>
      {/* <ThemeSwitcher onClick={toggleTheme} /> */}
      <div className={styles.wrapper}>
        <div className={styles.container}>
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
              <Treki />
              <Filtr />
              <div className={styles.centerblock__content}>
                <Poisk />
                <div className={styles.content__playlist}>
                  <Track />
                  <Track />
                  <Track />
                  <Track />
                  <Track />
                  <Track />
                  <Track />
                  <Track />
                  <div className={styles.playlist_item}>
                    <div className={styles.playlist_track}>
                      <div className={styles.track_title}>
                        <div className={styles.track_title_image}>
                          <svg className={styles.track_title_svg} alt="music">
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track_title_text}>
                          <a className={styles.track_title_link} href="http://">
                            {' '}
                            <span className={styles.track_title_span} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.track_author}>
                        {/* eslint-disable-next-line */}
                        <a
                          className={styles.track_author_link}
                          href="http://"
                        />
                      </div>
                      <div className={styles.track_album}>
                        {/* eslint-disable-next-line */}
                        <a className={styles.track_album_link} href="http://" />
                      </div>
                      <div className="track_time">
                        <svg className={styles.track_time_svg} alt="time">
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track_time_text} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.main_sidebar}>
              <Sidebarperson />
              <Sidebar />
            </div>
          </main>
          <Bar />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}
export default Wrapper