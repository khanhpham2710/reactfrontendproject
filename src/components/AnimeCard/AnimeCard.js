import './AnimeCard.css';
import { useState } from 'react';
import AnimeModal from "../AnimeModal/AnimeModal";
import { Typography, Box } from '@mui/material';
import { AppBar } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles'; 


const TitleBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#grey' : theme.palette.primary.main,
    padding: '8px',
}));

function AnimeCard({ item }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme(); 

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
      <TitleBox className="title" theme={theme}>
        <Typography variant='p' sx={{
          fontWeight: 700,
          letterSpacing: "1px",
          fontSize: {
            xs: "13px",
            sm: "14px",
            md: "16px",
            lg: "18px"
          },
          color: 'white',
        }}>
          {item.title}
        </Typography>
      </TitleBox>
      <AnimeModal handleClose={handleClose} item={item} setOpen={setOpen} open={open} />
    </Box>
  );
}

export default AnimeCard;
