import './CharacterCard.css';
import { useEffect, useRef } from 'react';
import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function CharacterCard({ character, role, animeId }) {
  const theme = useTheme();
  const imgRef = useRef();
  const navigate = useNavigate(); 

  const { images, name, mal_id } = character.character

  const style = {
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
  }


  useEffect(() => {
    imgRef.current.style.backgroundImage = `url(${images?.jpg.image_url})`;
  }, [character, images]);

  function handleClick() {
    const link = "/character/" + animeId + "/" + mal_id;
    navigate(link);
  }

  return (
    <Box className="character_card" onClick={handleClick} p={{
      xs: 0.5,
      sm: 0.7,
      md: 0.9,
      lg: 1
    }}>
      <div className="image_container" ref={imgRef}></div>
      <Box className="title" theme={theme} sx={{ display: "flex", flexDirection: "column", p: 0.5 }}>
        <Typography
          variant='body1'
          sx={{
            ...style,
            color: "#fff",
            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "15px",
              lg: "18px",
            },
            height: "70%"
          }}>
          {name}
        </Typography>
        <Typography
          variant='body1'
          sx={{
            ...style,
            color: "#ccc",
            fontSize: {
              md: "12px",
              lg: "16px",
              height: "30%"
            },
            display: {
              xs: "none",
              md: "block"
            }
          }}>
          Role: {role}
        </Typography>
      </Box>
    </Box>
  );
}

export default CharacterCard;
