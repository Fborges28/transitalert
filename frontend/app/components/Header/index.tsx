import React from 'react'
import Menu from '../Menu'
import Logo from '../Logo'
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={`${styles["main-header"]}`}>
      <Logo />
      <Menu />
    </header>
  )
}

export default Header