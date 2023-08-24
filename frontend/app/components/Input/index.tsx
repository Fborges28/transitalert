import React, { ChangeEventHandler } from 'react'
import styles from "./Input.module.css";

function Input({
  id,
  label,
  type,
  placeholder,
  value,
  onChange
}: {
  id: string,
  label: string,
  type: string,
  placeholder: string,
  value?: string,
  onChange?: (ChangeEventHandler<HTMLInputElement>)
}) {
  return (
    <div className={`${styles["form-control"]}`}>
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} placeholder={placeholder} type={type} onChange={onChange}/>
    </div>
  )
}

export default Input