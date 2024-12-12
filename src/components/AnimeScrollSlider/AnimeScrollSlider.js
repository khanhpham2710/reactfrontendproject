import "./AnimeScrollSlider.css";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import AnimeMultipleCarousel from "../AnimeMultipleCarousel/AnimeMultipleCarousel";

function AnimeScrollSlider(props) {
  const { list, label } = props;

  const linkPath = "/top/" + label.toLowerCase();

  return (
    <Container maxWidth="xl">
      <div className='anime_scroll_slider'>
        <div className="label">
          <Link to={linkPath}> 
            <Typography variant="h3" className="anime_scroll_label">{label} Anime</Typography>
          </Link>
          <Link to={linkPath}> 
            <Typography variant="body2" component="p">More</Typography>
          </Link>
        </div>
        <AnimeMultipleCarousel list={list}/>
      </div>
    </Container>
  );
}

export default AnimeScrollSlider;
