import './AnimeCard.css';
import { useState } from 'react';
import AnimeModal from "../AnimeModal/AnimeModal"
import { Typography, Box } from '@mui/material';

function AnimeCard({ item }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("Modal closing");
    setOpen(false);
  };

  return (
    <Box className="anime_card" onClick={handleClickOpen}>
      <div className="image_container">
        <img src={item.images.jpg.image_url} alt={item.title} />
      </div>
      <div className="title">
        <Typography variant='p' sx={{
          fontWeight: 700,
          letterSpacing: "1px",
          fontSize:{
            xs: "12px",
            sm: "14px",
            md: "16px",
            lg: "16px"
          }
        }}>{item.title}</Typography>
      </div>
      <AnimeModal handleClose={handleClose} item={item} setOpen={setOpen} open={open}/>
    </Box>
  );
}

export default AnimeCard;
