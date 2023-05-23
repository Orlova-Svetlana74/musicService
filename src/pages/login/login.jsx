// import styles from './trackplayalbum.module.css'
// import React from 'react'

import styles from './login.module.css'
import LogoImg from './logo.png'

function Login() {
  return (
    <form className={styles.modal__form_login} id="formLogIn action=">
      <div className={styles.modal__logo}>
        <img src={LogoImg} alt="logo" />
      </div>
      <input
        className={styles.modal__input}
        type="text"
        name="login"
        id="formlogin"
        placeholder="Логин"
      />
      <input
        className={styles.modal__input}
        type="password"
        name="password"
        id="formpassword"
        placeholder="Пароль"
      />
      <button className={styles.modal__btn_enter} type="button" id="btnEnter">
        <a href="../index.html">Войти</a>
      </button>
      <button className={styles.modal__btn_signup} type="button" id="btnSignUp">
        <a href="signup.html">Зарегистрироваться</a>
      </button>
    </form>
  )
}
export default Login
