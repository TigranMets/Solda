import { AppBar, Grid, Menu, MenuItem, Toolbar, Typography, useTheme } from '@mui/material';
import React from 'react';
import style from './index.module.scss';
import { Link } from 'react-router-dom';
import LogoIcon from '../../assets/icons/logoMenu.svg';
import ChatIcon from '../../assets/icons/chat.svg';
import WarningIcon from '../../assets/icons/warning.svg';
import InfoIcon from '../../assets/icons/info.svg';
import UserIcon from '../../assets/icons/user.svg';
import QuitIcon from '../../assets/icons/quit.svg';
import NestedMenu from './NestedMenu';

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar position='fixed' elevation={'false'}>
      <Toolbar
        style={{
          backgroundColor: theme.palette.secondary.main,
          padding: '0 37px 0 24px',
          minHeight: '82px',
        }}>
        <Grid
          container
          flexDirection={'row'}
          justifyContent='space-between'
          alignItems={'center'}
          style={{
            minHeight: '82px',
          }}>
          <Grid xs='auto' item alignItems={'center'}>
            <Link style={{ height: 'fit-content' }}>
              <img src={LogoIcon} width='212' height='45' />
            </Link>
          </Grid>
          <Grid
            xs='auto'
            container
            item
            style={{
              minHeight: '82px',
            }}
            alignItems={'center'}>
            <Grid
              item
              sx='auto'
              style={{
                minHeight: '82px',
              }}>
              <NestedMenu />
            </Grid>
          </Grid>
          <Grid
            xs='auto'
            item
            container
            height='82px'
            flexDirection={'row'}
            justifyContent='space-between'
            alignItems={'center'}
            columnSpacing={7}>
            <Grid
              xs='auto'
              container
              justifyContent='space-between'
              height='82px'
              columnSpacing={3}
              item
              alignItems={'center'}>
              <Grid xs='auto' item alignItems={'center'}>
                <Link style={{ display: 'block', marginBottom: '-6px' }}>
                  <img src={InfoIcon} />
                </Link>
              </Grid>
              <Grid xs='auto' item alignItems={'center'}>
                <Link style={{ display: 'block', marginBottom: '-6px' }}>
                  <img src={ChatIcon} />
                </Link>
              </Grid>
              <Grid xs='auto' item alignItems={'center'}>
                <Link style={{ display: 'block', marginBottom: '-6px' }}>
                  <img src={WarningIcon} />
                </Link>
              </Grid>
            </Grid>
            <Grid
              xs='auto'
              item
              container
              justifyContent='space-between'
              alignItems={'center'}
              columnSpacing={4}>
              <Grid item sx='auto'>
                <Link style={{ display: 'block', textDecoration: 'none' }}>
                  <Grid container alignItems={'center'} columnSpacing={1.2}>
                    <Grid xs='auto' item alignItems={'center'}>
                      <img src={UserIcon} style={{ display: 'block', marginBottom: '0px' }} />
                    </Grid>
                    <Grid xs='auto' item alignItems={'center'}>
                      <Typography
                        variant='menuItem'
                        fontWeight={700}
                        color={theme.palette.primary.main}>
                        Илья Петров
                      </Typography>
                    </Grid>
                  </Grid>
                </Link>
              </Grid>
              <Grid item sx='auto'>
                <Link style={{ display: 'block', marginBottom: '-6px' }}>
                  <img src={QuitIcon} />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
