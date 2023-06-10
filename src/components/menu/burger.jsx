/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
// import React from 'react'
import styles from './burger.module.css'


function Burger({ onClick }) {
  
  return (
    <div // eslint-disable-line jsx-a11y/no-static-element-interactions
      className={styles.nav__burger}
      onClick={onClick}
      
    >
      <span className={styles.burger__line} />
      <span className={styles.burger__line} />
      <span className={styles.burger__line} />
    </div>
  )
}

export default Burger
