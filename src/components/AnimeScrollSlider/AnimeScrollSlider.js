import "./AnimeScrollSlider.css";
import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import AnimeCard from "../AnimeCard/AnimeCard";
import AnimeMultipleCarousel from "../AnimeMultipleCarousel/AnimeMultipleCarousel";

function AnimeScrollSlider0(props) {
  const { list, label } = props;
  const listRef = useRef();

  const linkPath = label.toLowerCase();

  return (
    <Container maxWidth="xl">
      <div className='anime_scroll_slider'>
        <div className="label">
          <Link to={`/${linkPath}`}> 
            <Typography variant="h3">{label} Anime</Typography>
          </Link>
          <Link to={`/${linkPath}`}> 
            <Typography variant="body2" component="p">More</Typography>
          </Link>
        </div>
        <AnimeMultipleCarousel list={list}/>
      </div>
    </Container>
  );
}

export default AnimeScrollSlider0;
