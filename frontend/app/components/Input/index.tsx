import React from 'react'
import styles from "./Input.module.css";

function Input({
  id,
  label,
  type,
  placeholder
}: {
  id: string,
  label: string,
  type: string,
  placeholder: string
}) {
  return (
    <div className={`${styles["form-control"]}`}>
      <label htmlFor={id}>{label}</label>
      <input id={id} placeholder={placeholder} type={type}/>
    </div>
  )
}

export default Input