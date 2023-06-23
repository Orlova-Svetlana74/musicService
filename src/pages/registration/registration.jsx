// import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import NavBar from '../../components/navbar/navbar'
// import { NavLink } from 'react-router-dom'
import { usePostRegMutation } from '../../store/api/userApi'
import styles from './registration.module.css'
import LogoImg from './logo.png'

function Registration() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [passRep, setPassRep] = useState('')

  const navigate = useNavigate()

  const [postReg, { isSuccess }] = usePostRegMutation()

  const RegistrationButton = async () => {
    if(pass !== passRep){
      // alert('Пароль не совпадает')           
      return
  }
  await postReg({
    "email": email,
    "password": pass,
    "username": email,
}).unwrap()

  // if (isError) return alert('Ошибка данных')
  if (isSuccess) navigate('/login')
  // if (isLoading) return alert('Добро пожаловать!')
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
        type="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className={styles.modal__input}
        type="password"
        id="password"
        onChange={(e) => setPass(e.target.value)}
        placeholder="Пароль"
      />
      <input
        className={styles.modal__input}
        type="password"
        id="password"
        onChange={(e) => setPassRep(e.target.value)}
        placeholder="Повторите пароль"
      />
      <button
        onClick={RegistrationButton}
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