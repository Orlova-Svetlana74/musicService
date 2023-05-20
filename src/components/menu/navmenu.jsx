/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { useState } from 'react'
import Burger from './burger'
import styles from './navmenu.module.css'

const items = [
  { value: 'Главное', href: '', id: '1' },
  { value: 'Мой плейлист', href: '', id: '2' },
  { value: 'Войти', href: '', id: '3' },
]
function Navmenu() {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <nav className={styles.main__nav}>
      <Burger onClick={() => setMenuActive((active) => !active)} />
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        className={`${styles.nav__menu}${menuActive ? styles.active : ''}`}
        onClick={() => setMenuActive(false)}
      >
        <ul className={styles.menu__list}>
          {items.map((item) => (
            <li className={styles.menu__item} key={item.id}>
              <a href = 'true' className={styles.menu__link}>
                {item.href} {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
export default Navmenu