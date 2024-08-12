import React, { useState } from 'react';
import { Container, Button } from '@mui/material';
import Slider from "react-slick";
import MovieItem from '../MovieItem/MovieItem';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        height: "100%",
        alignItems: "center",
        transform: "scale(3) translate(-50%,-15%)",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        height: "100%",
        alignItems: "center",
        transform: "scale(3) translate(50%,-15%)",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
}

function MoviesSection({ list, onSelectVideo }) {
  const [hoveredId, setHoveredId] = useState(null);

  const handleHover = (id, isHovered) => {
    setHoveredId(isHovered ? id : null);
  };

  const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Container maxWidth="xl">
      <Slider {...settings}>
        {list.map((item) => (
          <div
            key={item.id}
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden"
            }}
          >
            <MovieItem id={item.id} onHover={handleHover} />
            {hoveredId === item.id && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => onSelectVideo(item.id)}
                sx={{margin: "0 auto"}}
              >
                Watch
              </Button>
            )}
          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default MoviesSection;
