import * as React from 'react';
import Box from '@mui/material/Box';
import assets from '../../assets/assets';


export default function Loading() {
  

  const style = {
    width: "100vw",
    height: "100vh",
    bgcolor: "#fff",
    zIndex: "20",
  }

  return (
    <Box sx={style}>
      <img src={assets.loading} style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)"}} alt='loading'/>
    </Box>
  );
}