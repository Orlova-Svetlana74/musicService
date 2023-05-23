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
          <li>
            <NavLink
              to="/components/pages/login/login_wrapper"
              className={({ isActive }) =>
                cn("App-link", {
                  [activeClassName]: isActive,
                })
              }
            >
              Home
            </NavLink>
          </li>
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
        {user ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  )
}
export default NavBar