import React from 'react';
import { Grid, Typography, Button, Link, useTheme } from '@mui/material';

import OutlinedTextField from '../../components/OutlinedTextField';

const Login = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      columns={12}
      // alignItems={'flex-start'}
      direction='column'
      style={{ width: '100%' }}>
      <Grid
        item
        container
        columns={100}
        direction='row'
        justifyContent={'space-between'}
        alignItems='baseline'
        marginBottom={'14px'}>
        <Grid item xs={38}>
          <Typography variant='h2' fullWidth textAlign={'center'}>
            Войти в аккаунт
          </Typography>
        </Grid>
        <Grid item xs={38}>
          <Button variant='outlined' fullWidth>
            Регистрация
          </Button>
        </Grid>
      </Grid>
      <Grid xs={12} container item marginBottom={'10px'}>
        <OutlinedTextField label='Введите электронную почту или логин' />
      </Grid>
      <Grid xs={12} container item marginBottom={'15px'}>
        <OutlinedTextField label='Введите пароль' />
      </Grid>
      <Grid
        item
        xs={12}
        container
        columns={100}
        direction='row'
        justifyContent={'space-between'}
        alignItems='baseline'
        marginBottom={'14px'}>
        <Grid item xs={38}>
          <Link
            color={theme.palette.text.link}
            variant={'h2'}
            underline='always'
            fullWidth
            textAlign={'center'}
            sx={{ display: 'block', cursor: 'pointer' }}>
            Забыли пароль?
          </Link>
        </Grid>
        <Grid item xs={38}>
          <Button variant='contained' fullWidth>
            Войти
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
