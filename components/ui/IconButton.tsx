import React from 'react';
import { styled } from '@mui/system';

const IconButtonStyled = styled('button')(({ theme }) => ({
  border: 'none',
  background: 'transparent',
  borderRadius: '50%',
  padding: '12px',
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s, box-shadow 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  '&:focus-visible': {
    outline: '2px solid blue', // Adjust color as needed
    outlineOffset: '2px',
  },
}));

const IconButton = ({ icon, onClick }) => (
  <IconButtonStyled onClick={onClick}>
    {icon}
  </IconButtonStyled>
);

export default IconButton;
