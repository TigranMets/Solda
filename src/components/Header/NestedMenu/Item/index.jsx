import React, { useEffect, useState } from 'react';
import { Typography, Menu, MenuItem, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { throttle } from '../../../../helpers/throttle.js';

function NestedMenuItem({ title, type, items, index, menuRef }) {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [position, setPosition] = useState({ left: 0, top: 0 });

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      const rect = event.currentTarget.closest('a').getBoundingClientRect();
      setPosition({ left: rect.right, top: rect.top });
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleSelect(index) {
    setSelectedIndex(index);
  }

  useEffect(() => {
    function track(e) {
      if (anchorEl && menuRef.current) {
        const anchorElRect = anchorEl.getBoundingClientRect();
        const menuElRect = menuRef.current.getBoundingClientRect();

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

    const throttledTrack = throttle(track, 100);

    document.addEventListener('mousemove', throttledTrack, false);

    return () => {
      window.removeEventListener('mousemove', throttledTrack, false);
    };
  }, [anchorEl, menuRef.current]);

  return (
    <>
      <Link
        style={{
          textAlign: 'center',
          width: '100%',
          textDecoration: 'none',
        }}
        aria-owns={anchorEl ? 'nested-menu-item-' + index : undefined}
        aria-haspopup='true'
        onMouseOver={handleClick}
        className='nestedMenuItemTitle'>
        <Typography
          style={{ display: 'block', padding: '6px 4px', cursor: 'pointer' }}
          sx={{
            ...theme.typography.menuSubItem,
            justifyContent: 'center',
            color: theme.palette.text.accent,
            whiteSpace: 'pre-wrap',
          }}
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
              backgroundColor: theme.palette.secondary.fifth,
              left: position.left + 'px !important',
              top: position.top + 'px !important',
              boxShadow: 'none',
              '& .MuiMenu-list': {
                padding: '0',
              },
              '& .MuiMenu-list .MuiMenuItem-root': {
                ...theme.typography.menuSubItem,
                borderLeft: `0.25px solid ${theme.palette.border.third}`,
                borderRight: `0.25px solid ${theme.palette.border.third}`,
                borderBottom: 'none',
                justifyContent: 'center',
                padding: '6px 10px',
                color: theme.palette.text.accent,
                '&:last-of-type': {
                  borderBottom: `0.25px solid ${theme.palette.border.third}`,
                },
                '&:first-of-type': {
                  borderTop: `0.25px solid ${theme.palette.border.third}`,
                },
                '&.Mui-selected': {
                  backgroundColor: theme.palette.primary.main,
                  border: 'none',
                  borderLeft: `4px solid ${theme.palette.secondary.sixth}`,
                },
                '& .MuiSvgIcon-root': {
                  fontSize: 18,
                  color: theme.palette.text.secondary,
                  // marginRight: theme.spacing(1.5),
                },
              },
            },
          }}
          id={'nested-menu-item-' + index}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            onMouseLeave: handleClose,
            ref: menuRef,
          }}>
          {items.map((item, index) => (
            <MenuItem
              onClick={handleClose}
              onMouseEnter={() => handleSelect(index)}
              selected={selectedIndex === index}>
              <Link
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}>
                <Typography
                  style={{ display: 'block', padding: '0 19px', cursor: 'pointer' }}
                  sx={{
                    ...theme.typography.menuSubItem,
                    justifyContent: 'center',
                    color: theme.palette.text.accent,
                  }}
                  variant='menuItem'
                  color={theme.palette.primary.main}>
                  {item.value}
                </Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
}

export default NestedMenuItem;
