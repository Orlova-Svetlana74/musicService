// import styles from './trackplayalbum.module.css'
// import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './login.module.css'
import LogoImg from './logo.png'

function Login({setToken}) { 
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate ();

  useEffect(() => {
    if (username.login) {
      // console.log (username, password)
      navigate('/')      
    }
  }, [])

   const handleUsernameChange = (event) => {
    setUsername (event.target.value);
   };
  const handlePasswordChange = (event) => {
  setPassword (event.target.value);
   };

  //  const onSubmit = (event) => {
  //   event.preventDefault();    
  //  }

  const handleRegister = (event) => {
    event.preventDefault();
    navigate('/registration') 
  } 

  function handleLogin() {
    const token = 'any_token_value'
    document.cookie = `token=${token}`
    setToken(token)
    navigate('/');
  }

  // const handleLogout = () => setUser(null)
  return (
    <form className={styles.modal__form_login} id="formLogIn action=">
      <div className={styles.modal__logo}>
        <img src={LogoImg} alt="logo" />
      </div>
      <input
        className={styles.modal__input}
        type="text"
        name="login"
        id="username"
        placeholder="Логин" 
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        className={styles.modal__input}
        type="password"
        name="password"
        id="password"
        placeholder="Пароль"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleLogin}
        className={styles.modal__btn_enter}
        type="button"
        id="btnEnter"
        
      >
        Войти
      </button>
      <button onClick={handleRegister}
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
