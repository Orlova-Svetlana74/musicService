// import styles from './trackplayalbum.module.css'
// import React from 'react'
import styles from './registration.module.css'
import LogoImg from './logo.png'

function Registration() {
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
      <button className={styles.modal__btn_signup_ent} type="button" id="SignUpEnter">
        <a href="../index.html">Зарегистрироваться</a>
      </button>
    </form>
  )
}
export default Registration