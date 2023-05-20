// import styles from './trackplayalbum.module.css'
import React from 'react'
import styles from './registration.module.css'
function Registration() {
  return (
    <form className="modal__form-login" id="formLogIn" action="#">
      <div className="modal__logo">
        <img src="../img/logo_modal.png" alt="logo" />
      </div>
      <input
        className="modal__input login"
        type="text"
        name="login"
        id="loginReg"
        placeholder="Логин"
      />
      <input
        className="modal__input password-first"
        type="password"
        name="password"
        id="passwordFirst"
        placeholder="Пароль"
      />
      <input
        className="modal__input password-double"
        type="password"
        name="password"
        id="passwordSecond"
        placeholder="Повторите пароль"
      />
      <button className="modal__btn-signup-ent" type="button" id="SignUpEnter">
        <a href="../index.html">Зарегистрироваться</a>{' '}
      </button>
    </form>
  )
}
export default Registration
