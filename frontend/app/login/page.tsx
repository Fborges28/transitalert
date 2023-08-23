import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import styles from "./Login.module.css"

function Login() {
  return (
    <div className={`${styles["login"]}`}>
      <Input id="user" label='Usuário/E-mail' placeholder='Usuário ou e-mail' type='text'></Input>
      <Input id="user" label='Senha' placeholder='senha' type='password'></Input>
      <div className={`${styles["login-access"]}`}>
        <Button>Acessar</Button>
      </div>
    </div>
  )
}

export default Login