import styles from './login_wrapper.module.css'
import React from 'react'
import Login from './login'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Loginwrapper({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const handleLogin = (event) => {
    event.preventDefault()
    setUser({ login: username })
    navigate('/')
  }
  return (
    <div className="wrapper">
      <div className="container-enter">
        <div className="modal__block" />
        <Login />
      </div>
    </div>
  )
}

export default Loginwrapper
