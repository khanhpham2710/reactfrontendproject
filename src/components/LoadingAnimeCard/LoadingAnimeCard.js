import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';


function LoadingAnimeCard() {
  return (
    <Box className="anime_card">
      <Skeleton 
        variant="rectangular" 
        style={{ height: '80%' }} 
        animation="wave" 
      />  
      <Skeleton 
        variant="rectangular" 
        className="title"
        animation="wave"  
      />
    </Box>
  );
}

export default LoadingAnimeCard;
