'use client'

import React, { useState } from 'react'
import Menu from '../Menu'
import Logo from '../Logo'
import styles from "./Header.module.css";

function Header() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <header className={`${styles["main-header"]} ${isLoggedIn? "loggedIn": ""}`}>
      <Logo />
      {
        isLoggedIn ? <Menu /> : ""
      }
    </header>
  )
}

export default Header