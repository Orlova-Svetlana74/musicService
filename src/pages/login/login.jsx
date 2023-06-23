// import styles from './trackplayalbum.module.css'
// import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  usePostTokenMutation,
  usePostLoginMutation,
} from '../../store/api/userApi'

import { userLogin } from '../../store/slices/userSlice'
import styles from './login.module.css'
import LogoImg from './logo.png'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // eslint-disable-next-line no-empty-pattern
  const [postToken, {}] = usePostTokenMutation()
  // eslint-disable-next-line no-empty-pattern
  const [postLogin, {}] = usePostLoginMutation()

  const handleLogin = async () => {
    await postToken({ email, password })
      .unwrap()
      .then((token) => {
        // console.log(token);

        // Сохраняем token в localStorage
        localStorage.setItem('token', token.refresh)

        postLogin({ email, password }).then((user) => {
          localStorage.setItem('user_id', user.data.id)
          // console.log(user)
          dispatch(
            userLogin({
              email: user.data.email,
              id: user.data.id,
              token: token.access,
            })
          )
          navigate('/')
          // console.log('переход на главную страницу')
        })
        // .catch((error) => {
        // console.log(error)
        // Выводим ошибку на экране
        // alert(`Ошибка при получении токена. Попробуйте еще раз.`)
        // })
      })
    // .catch((error) => {
    // console.log(error)
    // Выводим ошибку на экране
    // alert(`Ошибка ${error.status}: ${error.data.detail}`)
    // })
  }

  function handleRegister() {
    navigate('/registration')
  }

  // function handleLogin() {
  //   const token = 'any_token_value'
  //   document.cookie = `token=${token}`
  //   setToken(token)
  //   navigate('/')
  //   // eslint-disable-next-line no-console
  //   console.log(token)
  // }

  return (
    <form className={styles.modal__form_login} id="formLogIn action=">
      <div className={styles.modal__logo}>
        <img src={LogoImg} alt="logo" />
      </div>
      <input
        className={styles.modal__input}
        type="email"
        id="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.modal__input}
        type="password"
        id="password"
        placeholder="Пароль"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className={styles.modal__btn_enter}
        type="button"
        id="btnEnter"
      >
        Войти
      </button>
      <button
        onClick={handleRegister}
        className={styles.modal__btn_signup}
        type="button"
        id="btnSignUp"
      >
        Зарегистрироваться
      </button>
    </form>
  )
}
export default Login 
  