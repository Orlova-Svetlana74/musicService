// import { useState,} from 'react'
// import { useState} from 'react'

import 'react-loading-skeleton/dist/skeleton.css'
import './css/style.css'
import Filtr from './components/player/filtr'
import Playlist from './components/player/playlist'
import Poisk from './components/player/poisk'
import Treki from './components/player/treki'
import Bar from './components/bar/bar'
import Logo from './components/menu/logo'
import Navmenu from './components/menu/navmenu'
import Sidebar from './components/sidebar/sidebar'
import Sidebarperson from './components/sidebar/sidebarperson'
import Footer from './components/footer/footer'

function App() { 
  
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
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />

                    {/* <div className="playlist__item">
                      <div className="playlist__track track">
                        <div className="track__title">
                          <div className="track__title-image">
                            <svg className="track__title-svg" alt="music">
                              <use xlinkHref="img/icon/sprite.svg#icon-note" />
                            </svg>
                          </div>
                          <div className="track__title-text">
                            <a className="track__title-link" href="http://">
                              Elektro <span className="track__title-span" />
                            </a>
                          </div>
                        </div>
                        <div className="track__author">
                          <a className="track__author-link" href="http://">
                            Dynoro, Outwork, Mr. Gee
                          </a>
                        </div>
                        <div className="track__album">
                          <a className="track__album-link" href="http://">
                            Elektro
                          </a>
                        </div>
                        <div className="track__time">
                          <svg className="track__time-svg" alt="time">
                            <use xlinkHref="img/icon/sprite.svg#icon-like" />
                          </svg>
                          <span className="track__time-text">2:22</span>
                        </div>
                      </div>
                    </div> */}

                    {/* <div className="playlist__item">
                      <div className="playlist__track track">
                        <div className="track__title">
                          <div className="track__title-image">
                            <svg className="track__title-svg" alt="music">
                              <use xlinkHref="img/icon/sprite.svg#icon-note" />
                            </svg>
                          </div>
                          <div className="track__title-text">
                            <a className="track__title-link" href="http://">
                              I’m Fire <span className="track__title-span" />
                            </a>
                          </div>
                        </div>
                        <div className="track__author">
                          <a className="track__author-link" href="http://">
                            Ali Bakgor
                          </a>
                        </div>
                        <div className="track__album">
                          <a className="track__album-link" href="http://">
                            I’m Fire
                          </a>
                        </div>
                        <div className="track__time">
                          <svg className="track__time-svg" alt="time">
                            <use xlinkHref="img/icon/sprite.svg#icon-like" />
                          </svg>
                          <span className="track__time-text">2:22</span>
                        </div>
                      </div>
                    </div> */}

                    {/* <div className="playlist__item">
                      <div className="playlist__track track">
                        <div className="track__title">
                          <div className="track__title-image">
                            <svg className="track__title-svg" alt="music">
                              <use xlinkHref="img/icon/sprite.svg#icon-note" />
                            </svg>
                          </div>
                          <div className="track__title-text">
                            <a className="track__title-link" href="http://">
                              Non Stop{' '}
                              <span className="track__title-span">(Remix)</span>
                            </a>
                          </div>
                        </div>
                        <div className="track__author">
                          <a className="track__author-link" href="http://">
                            Стоункат, Psychopath
                          </a>
                        </div>
                        <div className="track__album">
                          <a className="track__album-link" href="http://">
                            Non Stop
                          </a>
                        </div>
                        <div className="track__time">
                          <svg className="track__time-svg" alt="time">
                            <use xlinkHref="img/icon/sprite.svg#icon-like" />
                          </svg>
                          <span className="track__time-text">4:12</span>
                        </div>
                      </div>
                    </div> */}

                    {/* <div className="playlist__item">
                      <div className="playlist__track track">
                        <div className="track__title">
                          <div className="track__title-image">
                            <svg className="track__title-svg" alt="music">
                              <use xlinkHref="img/icon/sprite.svg#icon-note" />
                            </svg>
                          </div>
                          <div className="track__title-text">
                            <a className="track__title-link" href="http://">
                              Run Run{' '}
                              <span className="track__title-span">
                                (feat. AR/CO)
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="track__author">
                          <a className="track__author-link" href="http://">
                            Jaded, Will Clarke, AR/CO
                          </a>
                        </div>
                        <div className="track__album">
                          <a className="track__album-link" href="http://">
                            Run Run
                          </a>
                        </div>
                        <div className="track__time">
                          <svg className="track__time-svg" alt="time">
                            <use xlinkHref="img/icon/sprite.svg#icon-like" />
                          </svg>
                          <span className="track__time-text">2:54</span>
                        </div>
                      </div>
                    </div>

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
                              Eyes on Fire{' '}
                              <span className="track__title-span">
                                (Zeds Dead Remix)
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="track__author">
                          <a className="track__author-link" href="http://">
                            Blue Foundation, Zeds Dead
                          </a>
                        </div>
                        <div className="track__album">
                          <a className="track__album-link" href="http://">
                            Eyes on Fire
                          </a>
                        </div>
                        <div className="track__time">
                          <svg className="track__time-svg" alt="time">
                            <use xlinkHref="img/icon/sprite.svg#icon-like" />
                          </svg>
                          <span className="track__time-text">5:20</span>
                        </div>
                      </div>
                    </div>

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
                              Mucho Bien{' '}
                              <span className="track__title-span">
                                (Hi Profile Remix)
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="track__author">
                          <a className="track__author-link" href="http://">
                            HYBIT, Mr. Black, Offer Nissim, Hi Profile
                          </a>
                        </div>
                        <div className="track__album">
                          <a className="track__album-link" href="http://">
                            Mucho Bien
                          </a>
                        </div>
                        <div className="track__time">
                          <svg className="track__time-svg" alt="time">
                            <use xlinkHref="img/icon/sprite.svg#icon-like" />
                          </svg>
                          <span className="track__time-text">3:41</span>
                        </div>
                      </div>
                    </div>

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
                              Knives n Cherries{' '}
                              <span className="track__title-span" />
                            </a>
                          </div>
                        </div>
                        <div className="track__author">
                          <a className="track__author-link" href="http://">
                            minthaze
                          </a>
                        </div>
                        <div className="track__album">
                          <a className="track__album-link" href="http://">
                            Captivating
                          </a>
                        </div>
                        <div className="track__time">
                          <svg className="track__time-svg" alt="time">
                            <use xlinkHref="img/icon/sprite.svg#icon-like" />
                          </svg>
                          <span className="track__time-text">1:48</span>
                        </div>
                      </div>
                    </div>

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
                              How Deep Is Your Love{' '}
                              <span className="track__title-span" />
                            </a>
                          </div>
                        </div>
                        <div className="track__author">
                          <a className="track__author-link" href="http://">
                            Calvin Harris, Disciples
                          </a>
                        </div>
                        <div className="track__album">
                          <a className="track__album-link" href="http://">
                            How Deep Is Your Love
                          </a>
                        </div>
                        <div className="track__time">
                          <svg className="track__time-svg" alt="time">
                            <use xlinkHref="img/icon/sprite.svg#icon-like" />
                          </svg>
                          <span className="track__time-text">3:32</span>
                        </div>
                      </div>
                    </div>

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
                              Morena <span className="track__title-span" />
                            </a>
                          </div>
                        </div>
                        <div className="track__author">
                          <a className="track__author-link" href="http://">
                            Tom Boxer
                          </a>
                        </div>
                        <div className="track__album">
                          <a className="track__album-link" href="http://">
                            Soundz Made in Romania
                          </a>
                        </div>
                        <div className="track__time">
                          <svg className="track__time-svg" alt="time">
                            <use xlinkHref="img/icon/sprite.svg#icon-like" />
                          </svg>
                          <span className="track__time-text">3:36</span>
                        </div>
                      </div>
                    </div> */}

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
