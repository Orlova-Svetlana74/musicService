// import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import NavBar from '../../components/navbar/navbar'
// import { NavLink } from 'react-router-dom'
import styles from './registration.module.css'
import LogoImg from './logo.png'


function Registration() {
  const navigate = useNavigate()
  const RegistrationButton = (event) => {
    event.preventDefault()
    navigate('/login', { replace: true })
  }

  // const [user, setUser] = useState(null)
  // const handleLogin = () => setUser({ login: 'taradam' })

  // const handleLogout = () => setUser(null)
  // const handleLogout = () => setUser(null)
  return (
    <form className={styles.modal__form_login} id="formLogIn" action="#">
      <div className={styles.modal__logo}>
        <img src={LogoImg} alt="logo" />
      </div>
      <input
        className={styles.modal__input}
        type="text"
        name="login"
        id="loginReg"
        placeholder="Логин"
      />
      <input
        className={styles.modal__input}
        type="password"
        name="password"
        id="passwordFirst"
        placeholder="Пароль"
      />
      <input
        className={styles.modal__input}
        type="password"
        name="password"
        id="passwordSecond"
        placeholder="Повторите пароль"
      />
      <button onClick={RegistrationButton}
        className={styles.modal__btn_signup_ent}
        type="button"
        id="SignUpEnter"
      >        
        Зарегистрироваться 
      </button>
    </form>
  )
}
export default Registration