/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
import Burger from './burger'

const items = [
  { value: 'Главное', href: "" },
  { value: 'Мой плейлист', href: "" },
  { value: 'Войти', href: "" },
]
function Navmenu() {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <nav className="main__nav nav">
      <Burger onClick={() => setMenuActive((active) => !active)} />
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        className={menuActive ? 'nav__menu active' : 'nav__menu'}
        onClick={() => setMenuActive(false)}
      >
        <ul className="menu__list">
          {items.map((item) => (
            <li className="menu__item">
              <a href className="menu__link">
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