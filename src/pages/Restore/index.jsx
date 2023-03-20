import React from 'react';
import { Grid, Typography, Button, Link, useTheme } from '@mui/material';

import OutlinedTextField from '../../components/OutlinedTextField';

const Restore = () => {
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
        <Grid item xs={50} marginBottom={'21px'}>
          <Typography variant='h2' fullWidth textAlign={'center'}>
            Восстановить доступ
          </Typography>
        </Grid>
      </Grid>
      <Grid xs={12} container item marginBottom={'23px'}>
        <OutlinedTextField label='Введите электронную почту или логин' />
      </Grid>
      <Grid
        item
        xs={12}
        container
        columns={100}
        direction='row'
        justifyContent={'flex-end'}
        alignItems='baseline'
        marginBottom={'14px'}>
        <Grid item xs={38}>
          <Button variant='contained' fullWidth>
            Восстановить
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Restore;
