import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import MyButton from "../../components/MyButton/MyButton"
import { useNavigate } from 'react-router-dom';
export default function ErrorPage({ error }) {
  const style = {
    width: "100vw",
    height: "100vh",
    bgcolor: "background.paper",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "20",
  };

  const navigate = useNavigate()

  console.log(error)

  return (
    <Box sx={style}>
      <Typography variant="h2" fontWeight="800" letterSpacing={1} sx={{ mb: 2 }}>
        Sorry for the inconvenience
      </Typography>
      <Typography variant="h3" gutterBottom>
        Please reload the page
      </Typography>
      <Box sx={{display: "flex", gap: 6 }}>
        <MyButton context="Back to home" onClick={() => {
          navigate("/home")
        }} />
        <MyButton context="Reload" onClick={() => {
          window.location.reload()
        }} />
      </Box>
    </Box>
  );
}
