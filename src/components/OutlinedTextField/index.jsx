import React from 'react';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import style from './index.scss';

const OutlinedTextField = (props) => {
  const theme = useTheme();

  return (
    <TextField
      variant='outlined'
      sx={{
        '& .MuiOutlinedInput-root': {
          '& > fieldset': {
            border: `1px solid ${theme.palette.text.placeholder} !important`,
          },
        },
        '& .MuiInputLabel-root': {
          color: theme.palette.text.placeholder,
          ...theme.typography.placeholder,
        },
        '& .MuiInputLabel:not(.MuiInputLabel-focused)': { top: '-6px !important' },
        '& .MuiInput-root': { color: theme.palette.text.h1 },
        '& .MuiOutlinedInput-input': {
          padding: '13px',
        },
      }}
      fullWidth
      {...props}
    />
  );
};

export default OutlinedTextField;
