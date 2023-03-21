import React, { useEffect, useState, useRef } from 'react';
import { Typography, Menu, MenuItem, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import NestedMenuItem from './Item';
import { throttle } from './../../../helpers/throttle.js';

function NestedMenu({ title, type, items, index }) {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [width, setWidth] = useState('auto');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const menuRef = useRef(null);
  const subMenuRef = useRef(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setWidth(event.currentTarget.getBoundingClientRect().width);
      setAnchorEl(event.currentTarget);
    }
  }

  useEffect(() => {
    function track(e) {
      if (anchorEl && menuRef.current) {
        const anchorElRect = anchorEl.getBoundingClientRect();
        const menuElRect = menuRef.current.getBoundingClientRect();
        if (subMenuRef.current) {
          const subMenuElRect = subMenuRef.current.getBoundingClientRect();
          if (
            (anchorElRect.top > e.pageY ||
              anchorElRect.bottom < e.pageY ||
              anchorElRect.left > e.pageX ||
              anchorElRect.right < e.pageX) &&
            (menuElRect.top > e.pageY ||
              menuElRect.bottom < e.pageY ||
              menuElRect.left > e.pageX ||
              menuElRect.right < e.pageX) &&
            (subMenuElRect.top > e.pageY ||
              subMenuElRect.bottom < e.pageY ||
              subMenuElRect.left > e.pageX ||
              subMenuElRect.right < e.pageX)
          ) {
            setAnchorEl(null);
          }
        } else {
          if (
            (anchorElRect.top > e.pageY ||
              anchorElRect.bottom < e.pageY ||
              anchorElRect.left > e.pageX ||
              anchorElRect.right < e.pageX) &&
            (menuElRect.top > e.pageY ||
              menuElRect.bottom < e.pageY ||
              menuElRect.left > e.pageX ||
              menuElRect.right < e.pageX)
          ) {
            setAnchorEl(null);
          }
        }
      }
    }

    const throttledTrack = throttle(track, 100);

    document.addEventListener('mousemove', throttledTrack, false);

    return () => {
      window.removeEventListener('mousemove', throttledTrack, false);
    };
  }, [anchorEl, menuRef.current, subMenuRef.current]);

  function handleClose() {
    setAnchorEl(null);
  }

  function handleSelect(index) {
    setSelectedIndex(index);
  }

  function handleUnSelect(index) {
    setSelectedIndex(index);
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
        aria-owns={anchorEl ? 'nested-menu-' + index : undefined}
        aria-haspopup='true'
        onClick={handleClick}
        onMouseOver={handleClick}>
        <Typography
          style={{ display: 'block', padding: '0 15px', cursor: 'pointer' }}
          variant='menuItem'
          color={theme.palette.primary.main}>
          {title}
        </Typography>
      </Link>

      {type === 'deep' && (
        <Menu
          hideBackdrop
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
          id={'nested-menu-' + index}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose, ref: menuRef }}>
          {items.map(({ value, type, items }, index) => (
            <MenuItem
              onMouseLeave={() => handleUnSelect()}
              onMouseEnter={() => handleSelect(index)}
              selected={selectedIndex === index}>
              <NestedMenuItem
                title={value}
                type={type}
                items={items}
                index={index}
                key={title}
                menuRef={subMenuRef}
              />
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
}

export default NestedMenu;
