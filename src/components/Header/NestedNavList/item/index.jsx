import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import NestedNavListSubItem from '../subItem';
import { Typography, useTheme } from '@mui/material';

const NestedNavListItem = ({ value, type, items }) => {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        selected={open}
        sx={{
          height: '27px',
          padding: '9px 18px',
          justifyContent: 'space-between',
          backgroundColor: theme.palette.secondary.fifth,

          borderBottom: `2px ${theme.palette.primary.main} solid`,

          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              height: '29px',
              width: '9px',
              backgroundColor: theme.palette.secondary.sixth,
              display: 'block',
              left: 0,
              top: '-2px',
            },
          },
        }}>
        <Typography variant='menuSubItem'>{value}</Typography>
        {type === 'deep' && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      {type === 'deep' && (
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {items.map(({ value, type, items }) => (
              <NestedNavListSubItem value={value} type={type} items={items} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default NestedNavListItem;
