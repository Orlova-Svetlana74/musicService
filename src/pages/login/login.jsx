// import styles from './trackplayalbum.module.css'
import React from 'react'
import styles from './login.module.css'
function Login() {
  return (
    <form className="modal__form-login" id="formLogIn" action="#">
      <div className="modal__logo">
        <img src="../img/logo_modal.png" alt="logo" />
      </div>
      <input
        className="modal__input login"
        type="text"
        name="login"
        id="formlogin"
        placeholder="Логин"
      />
      <input
        className="modal__input password"
        type="password"
        name="password"
        id="formpassword"
        placeholder="Пароль"
      />
      <button className="modal__btn-enter" type="button" id="btnEnter">
        <a href="../index.html">Войти</a>{' '}
      </button>
      <button className="modal__btn-signup" type="button" id="btnSignUp">
        <a href="signup.html">Зарегистрироваться</a>{' '}
      </button>
    </form>
  )
}
export default Login
