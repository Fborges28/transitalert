'use client'
import React, { useEffect } from 'react'
import LineStatus from '../components/LineStatus'
import styles from "./Status.module.css"
import axios from 'axios'

interface Line {
  title: string,
  status: string,
  color: string
}

function Status() {
  const [lines, setLines] = React.useState<Line[]>([]);

  useEffect(() => {
    axios.get<Line[]>('/trains/status')
      .then(response => {
        setLines(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className={styles["status"]}>
      <h4>Linhas de trem e metrô em São Paulo</h4>
      {
        lines.map((line, index) => {
          return <LineStatus key={index} name={line.title} status={line.status} style={{backgroundColor: line.color}} />
        })
      }
    </div>
  )
}

export default Status