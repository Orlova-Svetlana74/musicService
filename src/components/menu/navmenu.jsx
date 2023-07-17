/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
// import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Burger from './burger'
import styles from './navmenu.module.css'
import ThemeSwitcher from './themeswitcher'
// import { themes, useThemeContext } from '../wrapper/theme'

const items = [
  { value: 'Главное', to: '/', id: '1' },
  { value: 'Мой плейлист', to: '/MyTrack', id: '2' },
  { value: 'Выйти', to: '/login', id: '3' },
]
function Navmenu() {
  // const { theme } = useThemeContext()
  const [menuActive, setMenuActive] = useState(false)
  // const isLight = theme === themes.light
  // const themeClass = isLight ? styles.light : styles.dark

  return (
    <nav
      className=
      {styles.main__nav} 
      // style={{
      //   backgroundColor: theme.background,
      //   color: theme.color,
      // }}
    >
      <Burger onClick={() => setMenuActive((active) => !active)} />
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        className={`${styles.nav__menu}${menuActive ? styles.active : ''}`}
        onClick={() => setMenuActive(false)}
      >
        
        <ul className={styles.menu__list}>
          {items.map((item) => (
            <li className={styles.menu__item}  key={item.id}>
              {/* <a href=" " className={styles.menu__link}> */}
              <Link to={item.to}>{item.value}
              </Link>
              {/* </a> */}
            </li>
          ))}
          {/*  */}
          <ThemeSwitcher />
        </ul>
        </div>
     
    </nav>
  )
}
export default Navmenu