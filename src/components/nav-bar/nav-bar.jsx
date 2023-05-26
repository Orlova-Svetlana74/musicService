// import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
// import './index.css'

function NavBar({ user, onAuthButtonClick }) {
  const activeClassName = 'underline'
  return (
    <div className="NavBar__wrapper">
      <nav>
        <ul className="NavBar__list">
          <button type="button">
            <NavLink
              to="/registration"
              className={({ isActive }) =>
                cn('App-link', {
                  [activeClassName]: isActive,
                })
              }
            >
              Зарегистрироваться
            </NavLink>
          </button>
          {/* <li>
          <NavLink
              to="/about"
              className={({ isActive }) =>
                cn("App-link", {
                  [activeClassName]: isActive,
                })
              }
            >
              About
            </NavLink>
           </li> */}

          {/* <li>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                cn('App-link', {
                  [activeClassName]: isActive,
                })
              }
            >
              Account
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink
              to="/wallet"
              className={({ isActive }) =>
                cn("App-link", {
                  [activeClassName]: isActive,
                })
              }
            >
              Wallet
            </NavLink>
          </li> */}
        </ul>
      </nav>

      <button type="button" onClick={onAuthButtonClick}>
        {user ? '&&&&' : '77777'}
      </button>
    </div>
  )
}
export default NavBar