import React, { useEffect, useState } from 'react';
import { Typography, Menu, MenuItem, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import NestedMenuItem from './Item';

function NestedMenu() {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [width, setWidth] = useState('auto');
  const [selectedIndex, setSelectedIndex] = useState(null);

  function handleClick(event) {
    console.log(event.currentTarget);
    if (anchorEl !== event.currentTarget) {
      setWidth(event.currentTarget.getBoundingClientRect().width);
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleSelect(index) {
    setSelectedIndex(index);
  }

  function handleUnSelect() {
    setSelectedIndex(null);
  }

  return (
    <>
      <Link
        style={{
          textDecoration: 'none',
          minHeight: '82px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        aria-owns={anchorEl ? 'nested-menu' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
        onMouseOver={handleClick}>
        <Typography
          style={{ display: 'block', padding: '0 19px', cursor: 'pointer' }}
          variant='menuItem'
          color={theme.palette.primary.main}>
          Главная
        </Typography>
      </Link>
      <Menu
        sx={{
          '& .MuiPaper-root': {
            borderRadius: 0,
            width,
            backgroundColor: theme.palette.secondary.fifth,
            borderTop: '2px solid #FF0000',
            boxShadow: 'none',
            marginTop: '-1px',
            '& .MuiMenu-list': {
              padding: '0',
            },
            '& .MuiMenu-list .MuiMenuItem-root': {
              borderLeft: `0.25px solid ${theme.palette.border.third}`,
              borderRight: `0.25px solid ${theme.palette.border.third}`,
              padding: '0',
              justifyContent: 'center',
              '&.Mui-selected .nestedMenuItemTitle': {
                backgroundColor: theme.palette.primary.main,
                border: 'none',
                borderLeft: `4px solid ${theme.palette.secondary.sixth} !important`,
              },
              '&:last-of-type': {
                borderBottom: `0.25px solid ${theme.palette.border.third}`,
              },
            },
          },
        }}
        id='nested-menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}>
        <MenuItem
          onMouseEnter={() => handleSelect(0)}
          onMouseLeave={handleUnSelect}
          selected={selectedIndex === 0}>
          <NestedMenuItem title={'Настройки'} item={'первая'} />
        </MenuItem>
        <MenuItem
          onMouseEnter={() => handleSelect(1)}
          onMouseLeave={handleUnSelect}
          selected={selectedIndex === 1}>
          <NestedMenuItem title={'Настройки'} item={'первая'} />
        </MenuItem>
        <MenuItem
          onMouseEnter={() => handleSelect(2)}
          onMouseLeave={handleUnSelect}
          selected={selectedIndex === 2}>
          <NestedMenuItem title={'Настройки'} item={'первая'} />
        </MenuItem>
      </Menu>
    </>
  );
}

export default NestedMenu;
