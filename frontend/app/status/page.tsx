'use client'
import React, { useEffect } from 'react'
import LineStatus from '../components/LineStatus'
import styles from "./Status.module.css"
import axios from 'axios'
import Loading from '../components/Loading'

interface Line {
  title: string,
  status: string,
  color: string,
  updated_at: string
}

function Status() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>('');
  const [lines, setLines] = React.useState<Line[]>([]);

  useEffect(() => {
    axios.get<Line[]>('/trains/status')
      .then(response => {
        setLoading(false);
        setLines(response.data);
      })
      .catch(error => {
        console.log(error)
        setLoading(false);
        setError(error.message)
      })
  }, [])

  if(error) {
    return (
      <div className={styles["status"]}>
        <h4>Erro no servidor</h4>
      </div>
    )
  }

  return (
    <div className={styles["status"]}>
      <h4>Linhas de trem e metrô em São Paulo</h4>
      {
        lines.length > 0 ? (
          <p>Atualizado em {lines[0].updated_at}</p>
        ): ""
      }
      <div className={styles["status-container"]}>
        {
          loading ? (
            <Loading />
          ) : (
            lines.map((line, index) => {
              return <LineStatus key={index} name={line.title} status={line.status} style={{backgroundColor: line.color}} />
            })
          )
        }
      </div>
    </div>
  )
}

export default Status