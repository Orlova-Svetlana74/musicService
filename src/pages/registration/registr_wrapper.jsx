// import styles from './trackplayalbum.module.css'
import React from 'react'
import Registration from './registration'
import styles from './registr_wrapper.module.css'

function Registrwrapper() {
  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal__block">
          <Registration />
        </div>
      </div>
    </div>
  )
}

export default Registrwrapper
