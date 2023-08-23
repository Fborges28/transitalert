import React from 'react'
import LineStatus from '../components/LineStatus'
import styles from "./Status.module.css"

function Status() {
  return (
    <div className={styles["status"]}>
      <h4>Linhas de trem e metrô em São Paulo</h4>
      <LineStatus name='Linha-1 Azul' status='Status Normal' style={{backgroundColor: "blue"}} />
      <LineStatus name='Linha-1 Azul' status='Status Normal' style={{backgroundColor: "blue"}} />
      <LineStatus name='Linha-1 Azul' status='Status Normal' style={{backgroundColor: "blue"}} />
      <LineStatus name='Linha-1 Azul' status='Status Normal' style={{backgroundColor: "blue"}} />
      <LineStatus name='Linha-1 Azul' status='Status Normal' style={{backgroundColor: "blue"}} />
      <LineStatus name='Linha-1 Azul' status='Status Normal' style={{backgroundColor: "blue"}} />
      <LineStatus name='Linha-1 Azul' status='Status Normal' style={{backgroundColor: "blue"}} />
      <LineStatus name='Linha-1 Azul' status='Status Normal' style={{backgroundColor: "blue"}} />
      <LineStatus name='Linha-1 Azul' status='Status Normal' style={{backgroundColor: "blue"}} />
      <LineStatus name='Linha-1 Azul' status='Status Normal' style={{backgroundColor: "blue"}} />
      <LineStatus name='Linha-1 Azul' status='Status Normal' style={{backgroundColor: "blue"}} />
      <LineStatus name='Linha-1 Azul' status='Status Normal' style={{backgroundColor: "blue"}} />
      <LineStatus name='Linha-1 Azul' status='Status Normal' style={{backgroundColor: "blue"}} />
      <LineStatus name='Linha-1 Azul' status='Status Normal' style={{backgroundColor: "blue"}} />
      <LineStatus name='Linha-1 Azul' status='Status Normal' style={{backgroundColor: "blue"}} />
    </div>
  )
}

export default Status