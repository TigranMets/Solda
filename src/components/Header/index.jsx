import {
  AppBar,
  Grid,
  Menu,
  MenuItem,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import style from './index.module.scss';
import { Link } from 'react-router-dom';
import LogoIcon from '../../assets/icons/logoMenu.svg';
import ChatIcon from '../../assets/icons/chat.svg';
import WarningIcon from '../../assets/icons/warning.svg';
import InfoIcon from '../../assets/icons/info.svg';
import UserIcon from '../../assets/icons/user.svg';
import QuitIcon from '../../assets/icons/quit.svg';
import NestedMenu from './NestedMenu';
import { menu } from '../../helpers/data.js';
import NestedNavList from './NestedNavList';

const Header = () => {
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isBigMobile = useMediaQuery('(min-width: 420px)');

  return (
    <AppBar position='fixed' elevation={'false'}>
      <Toolbar
        style={{
          backgroundColor: theme.palette.secondary.main,
          padding: isMobile ? '0 13px 0' : '0 37px 0 24px',
          minHeight: isMobile ? '50px' : '82px',
        }}>
        <Grid
          container
          flexDirection={'row'}
          justifyContent='space-between'
          alignItems={'center'}
          flexWrap='nowrap'
          style={{
            minHeight: isMobile ? '50px' : '82px',
          }}>
          {isMobile && (
            <Grid xs='auto' item alignItems={'center'}>
              <IconButton
                onClick={() => setMenuOpen((prev) => !prev)}
                color={theme.palette.primary.main}
                sizeLarge>
                <MenuIcon
                  sx={{ color: theme.palette.primary.main, width: '35px', height: '30px' }}
                />
              </IconButton>
            </Grid>
          )}
          {!isMobile && (
            <Grid xs='auto' item alignItems={'center'}>
              <Link style={{ height: 'fit-content' }}>
                <img src={LogoIcon} width='212' height='45' />
              </Link>
            </Grid>
          )}
          {!isMobile && (
            <Grid
              xs='auto'
              container
              item
              flexDirection='row'
              style={{
                minHeight: isMobile ? '50px' : '82px',
              }}
              alignItems={'center'}>
              {menu.map(({ value, type, items }, index) => {
                return (
                  <Grid
                    item
                    sx='auto'
                    style={{
                      minHeight: isMobile ? '50px' : '82px',
                    }}>
                    <NestedMenu title={value} type={type} items={items} index={index} />
                  </Grid>
                );
              })}
            </Grid>
          )}
          <Grid
            xs='auto'
            item
            container
            height={isMobile ? '50px' : '82px'}
            flexDirection={'row'}
            justifyContent='space-between'
            alignItems={'center'}
            columnSpacing={isMobile ? 3 : 7}>
            <Grid
              xs='auto'
              container
              justifyContent='space-between'
              height={isMobile ? '50px' : '82px'}
              columnSpacing={isMobile ? 1.7 : 3}
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
              columnSpacing={isMobile ? 2 : 4}>
              <Grid item sx='auto'>
                <Link style={{ display: 'block', textDecoration: 'none' }}>
                  <Grid container alignItems={'center'} columnSpacing={1.2}>
                    <Grid xs='auto' item alignItems={'center'}>
                      <img src={UserIcon} style={{ display: 'block', marginBottom: '0px' }} />
                    </Grid>
                    {isBigMobile && (
                      <Grid xs='auto' item alignItems={'center'}>
                        <Typography
                          variant='menuItem'
                          fontWeight={700}
                          color={theme.palette.primary.main}>
                          Илья Петров
                        </Typography>
                      </Grid>
                    )}
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
      {menuOpen && <NestedNavList items={menu} />}
    </AppBar>
  );
};

export default Header;
