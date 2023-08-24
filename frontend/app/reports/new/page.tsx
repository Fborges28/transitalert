'use client'
import React, { useEffect } from 'react'
import Input from '@/app/components/Input'
import Button from '@/app/components/Button'
import styles from "./NewReport.module.css"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


import axios from 'axios'

type Status = 'delayed' | 'stopped' | 'other' | 'ok' | '';

interface IReport {
  line: string,
  status: Status,
  description: string
}

interface ILine {
  title: string;
}

interface IStatus {
  label: string;
}

function ReportNew() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const [lines, setLines] = React.useState<ILine[]>([]);
  const [statuses, setStatuses] = React.useState<IStatus[]>([
    {
      label: 'Atrasado',
    },
    {
      label: 'Parado',
    },
    {
      label: 'Outro',
    }
  ]);

  const [report, setReport] = React.useState<IReport>({
    line: '',
    status: '',
    description: ''
  });

  useEffect(() => {
    axios.get('/trains')
    .then(function (response) {
      setLoading(false);
      setLines(response.data);
    })
    .catch(function (error) {
      console.log(error);
      setError(error.message);
    });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    console.log(report);
    axios.post('/reports', report)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    setReport({
      line: '',
      status: '',
      description: ''
    });
  }

  const onFieldChange = (event: any) => {
    let value = event.target.value;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setReport({ ...report, [event.target.name]: value });
  };

  if(error) {
    return (
      <div className={styles["new-report"]}>
        <h4>Erro no servidor</h4>
      </div>
    )
  }

  return (
    <div className={`${styles["new-report"]}`}>
      <h2>Reportar problema</h2>
      <form onSubmit={handleSubmit}>
        <Stack>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="line">Linha</InputLabel>
            <Select
              labelId="line"
              id="line"
              label="line"
              name='line'
              onChange={onFieldChange}
            >
              {
                lines.map((line, index) => {
                  return <MenuItem key={index} value={line.title}>{line.title}</MenuItem>
                })
              }
            </Select>
            <FormHelperText>Qual a linha com problemas?</FormHelperText>
          </FormControl>
        </Stack>
        <Stack>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="status">Motivo</InputLabel>
            <Select
              labelId="status"
              id="status"
              label="status"
              name='status'
              onChange={onFieldChange}
            >
              {
                statuses.map((status, index) => {
                  return <MenuItem key={index} value={status.label}>{status.label}</MenuItem>
                })
              }
            </Select>
            <FormHelperText>O que está acontecendo?</FormHelperText>
          </FormControl>
        </Stack>
        <Stack padding={1}>
          <TextField
            id="description"
            name="description"
            label="Descrição"
            multiline
            rows={4}
            value={report.description}
            onChange={onFieldChange}
          />
        </Stack>
        <Stack padding={1} marginTop={2}>
          <Button>Enviar</Button>
        </Stack>
      </form>
    </div>
  )
}

export default ReportNew