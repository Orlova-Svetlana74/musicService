// import { useState,} from 'react'
// import { useState, useEffect } from 'react'
// import SkeletonTrack from './components/skeleton/skeletontrack'
// import 'react-loading-skeleton/dist/skeleton.css'
import './css/style.css'
import Filtr from './components/player/filtr'
import Track from './components/player/track'
import Poisk from './components/player/poisk'
import Treki from './components/player/treki'
import Bar from './components/bar/bar'
import Logo from './components/menu/logo'
import Navmenu from './components/menu/navmenu'
import Sidebar from './components/sidebar/sidebar'
import Sidebarperson from './components/sidebar/sidebarperson'
import Footer from './components/footer/footer'

function App() {
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 3000)
  //   return () => clearTimeout(timer)
  // }, [])
  return (
    // <div className="App">
    // </div>
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <nav className="main__nav nav">
            <Logo />
            <Navmenu />
          </nav>
          <div className="main__centerblock centerblock">
            <div className="centerblock__search search">
              <svg className="search__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-search" />
              </svg>
              <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <Treki />
            <Filtr />
            <div className="centerblock__content">
              <Poisk />
              <div className="content__playlist playlist">
              <Track />
              <Track />
              <Track />
              <Track />
              <Track />
              <Track />
              <Track />
              <Track />                

                <div className="playlist__item">
                  <div className="playlist__track track">
                    <div className="track__title">
                      <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note" />
                        </svg>
                      </div>
                      <div className="track__title-text">
                        <a className="track__title-link" href="http://">
                          {' '}
                          <span className="track__title-span" />
                        </a>
                      </div>
                    </div>
                    <div className="track__author">
                      {/* eslint-disable-next-line */}
                      <a className="track__author-link" href="http://" />
                    </div>
                    <div className="track__album">
                      {/* eslint-disable-next-line */}
                      <a className="track__album-link" href="http://" />
                    </div>
                    <div className="track__time">
                      <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                      </svg>
                      <span className="track__time-text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main__sidebar sidebar">
            <Sidebarperson />
            <Sidebar />
          </div>
        </main>
        <Bar />
        <Footer />
      </div>
    </div>
  )
}
export default App