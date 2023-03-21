import React from 'react';
import style from './index.module.scss';
import { Grid, Box, useTheme, useMediaQuery } from '@mui/material';

import logoIcon from './../../assets/icons/logo.svg';
import Background from './../../assets/images/authBg.svg';
import BackgroundMobile from './../../assets/images/authBgm.svg';

import { Outlet } from 'react-router-dom';

const AuthorizationLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Grid
      container
      alignItems={{ md: 'center' }}
      justifyContent={'center'}
      direction='row'
      sx={{
        backgroundColor: theme.palette.secondary.fourth,
        backgroundImage: `url(${isMobile ? BackgroundMobile : Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
      }}>
      <Grid item xs={12} md='auto' textAlign={'center'}>
        <img src={logoIcon} alt='logo' className={style.logo} />
      </Grid>
      <Grid item xs='auto'>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            padding: '16px',
            border: `${theme.palette.secondary.third} 2px solid`,
            borderLeftWidth: 1,
            borderRightWidth: 1,
          }}
          className={style.wrapper}>
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthorizationLayout;
