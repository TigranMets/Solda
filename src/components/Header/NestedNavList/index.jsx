import * as React from 'react';
import List from '@mui/material/List';
import NestedNavListItem from './item';

export default function NestedNavList({ items }) {
  return (
    <List
      sx={{ bgcolor: 'background.paper', paddingTop: 0 }}
      component='nav'
      aria-labelledby='Навигационные ссылки'>
      {items.map(({ value, type, items }) => (
        <NestedNavListItem value={value} type={type} items={items} />
      ))}
    </List>
  );
}
