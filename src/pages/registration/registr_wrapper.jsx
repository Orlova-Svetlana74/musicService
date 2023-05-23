// import styles from './trackplayalbum.module.css'
// import React from 'react'
import Registration from './registration'
import styles from './registr_wrapper.module.css'

function Registrwrapper() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container_signup}>
        <div className={styles.modal__block}>
          <Registration />
        </div>
      </div>
    </div>
  )
}

export default Registrwrapper
