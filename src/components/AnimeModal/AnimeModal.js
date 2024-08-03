import React from 'react';
import { Box } from '@mui/material';

function AnimeModal({ handleClose, item, setOpen }) {

    console.log(handleClose)
  return (
    <Box
      sx={{
        width: 700,
        height: 700,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
        padding: 2,
      }}
    >
      <button onClick={handleClose} aria-label="Close modal">Close</button>
    </Box>
  );
}

export default AnimeModal;
