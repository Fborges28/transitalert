'use client';
import React, {useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import styles from "./ReportStatus.module.css"
import axios from "axios";
import Loading from '@/app/components/Loading';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type Status = 'delayed' | 'stopped' | 'other' | '';

interface IReport {
  line: string,
  status: Status,
  description: string
}

export default function ReportStatus() {
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>('');
  const [reports, setReports] = React.useState<IReport[]>([]);
  const currentDate = new Date().toLocaleDateString("pt-BR");

  useEffect(() => {
    axios.get('/reports')
      .then(function (response) {
        console.log(response);
        setLoading(false);
        setReports(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
        setError(error.message);
      });
  }, [])

  if(error) {
    return (
      <div className={styles["report-status"]}>
        <h4>Erro no servidor</h4>
      </div>
    )
  }

  return (
    <>
      {
        isLoading ? (
          <div className={styles["report-status"]}>
            <div className={styles["report-status-container"]}>
              <Loading />  
            </div>  
          </div>
      ): (
        <div className={styles["report-status"]}>
          <h2>Relatos dos usuários sobre a situação do transporte: {currentDate}</h2>
          <div className={styles["report-status-container"]}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {
                reports.map((report, index) => {
                  return (
                    <>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt="User random" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={report.line}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                Usuário - 
                              </Typography>
                              {report.description}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </>
                  )
                })
              }
            </List>
            <Stack spacing={2} marginTop={4}>
              <Pagination count={10} />
            </Stack>
          </div>
        </div>
      )
    }
    </>
  );
}