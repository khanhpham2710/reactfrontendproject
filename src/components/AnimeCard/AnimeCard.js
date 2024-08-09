import './AnimeCard.css';
import { useEffect, useRef, useState } from 'react';
import AnimeModal from "../AnimeModal/AnimeModal";
import { Typography, Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';



function AnimeCard({ item }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const imgRef = useRef();

  const fontSize = {
    xs: "10px",
    sm: "13px",
    md: "16px",
    lg: "16px",
    xl: "19px"
  };


  useEffect(() => {
    imgRef.current.style.backgroundImage = `url(${item.images.jpg.image_url})`;
  }, [item]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="anime_card" onClick={handleClickOpen}>
      <div className="image_container" ref={imgRef}>
        {item.score && (
          <Typography variant="body2" component="p" className='score' sx={{fontSize: fontSize}}>
            {item.score}
          </Typography>
        )}
        <Typography variant="body2" component="p" className='favorites' sx={{fontSize: fontSize, display: "flex", alignItems: "center", justifyContent: "center", gap: "5px"}}>
          <FavoriteIcon sx={{ fontSize: fontSize }}/>
          {item.favorites}
        </Typography>
        
        <Box width="100%" sx={{display: "flex", justifyContent: "flex=start", gap:"5px"}} className="genres">
          <Typography variant='body1' element="p" sx={{fontSize: fontSize}}>{item.genres[0].name}</Typography>
          <Typography variant='body1' element="p" sx={{fontSize: fontSize}}>{item.genres[1]?.name}</Typography>
        </Box>
      </div>
      <Box className="title" theme={theme} sx={{display: "flex", flexDirection: "column"}}>
        <Typography
          variant='body1'
          sx={{
            fontWeight: 700,
            fontSize: fontSize,
            color: 'white',
            height: "70%",
            display: "flex",
            alignItems: "center"
          }}
        >
          {item.title}
        </Typography>
      </Box>
      <AnimeModal handleClose={handleClose} item={item} setOpen={setOpen} open={open} />
    </Box>
  );
}

export default AnimeCard;
