import React from 'react'
import styles from './sidebarperson.module.css'

function Sidebarperson() {
  return (
    <div className={styles.sidebar__personal}>
      <p className={styles.sidebar__personal_name}>Sergey.Ivanov</p>
      <div className="sidebar__avatar" />
    </div>
  )
}
export default Sidebarperson
