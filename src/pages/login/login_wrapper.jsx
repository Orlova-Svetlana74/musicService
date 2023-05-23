// import React from 'react'

// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import Login from './login'
import styles from './login_wrapper.module.css'

function Loginwrapper() {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const navigate = useNavigate()

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value)
  // }
  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value)
  // }
  // const handleLogin = (event) => {
  //   event.preventDefault()
  //   setUser({ login: username })
  //   navigate('/')
  // }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container_enter}>
        <div className={styles.modal__block} />
        <Login />
      </div>
    </div>
  )
}

export default Loginwrapper