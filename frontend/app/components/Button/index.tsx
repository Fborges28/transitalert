import React from 'react'
import styles from "./Button.module.css";

function Button({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <button className={styles["button"]}>
      {children}
    </button>
  )
}

export default Button