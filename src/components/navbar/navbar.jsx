// import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
// import './index.css'

function NavBar() {
  const activeClassName = 'underline'
  return (
    <div className="NavBar__wrapper">
      <button type="button">
        <NavLink
          to="./registration"
          className={({ isActive }) =>
            cn('App-link', {
              [activeClassName]: isActive,
            })
          }
        >
          Зарегистрироваться
        </NavLink>
      </button>
      <div>
        <NavLink
          to="./usertrack"
          className={({ isActive }) =>
            cn('App-link', {
              [activeClassName]: isActive,
            })
          }
        />
      </div>
    </div>
  )
}
export default NavBar
