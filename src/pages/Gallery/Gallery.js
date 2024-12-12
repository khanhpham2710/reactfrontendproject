import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchAnimePictures } from "../../global/characterSlice";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading/Loading";
import ErrorPage from "../ErrorPage/ErrorPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Box, Typography } from "@mui/material";
import "./Gallery.css";
import BackButton from "../../components/BackButton/BackButton";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        transform: "scale(1.5) translate(10%,0%)",
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
        display: "block",
        transform: "scale(1.5) translate(-10%,0%)",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
}



function Gallery() {
  const { characterId } = useParams();
  const dispatch = useDispatch();
  const { pictures, loading, error } = useSelector((state) => state.character);

  const [selectedIndex, setSelectedIndex] = useState(0);


  useEffect(() => {
    dispatch(fetchAnimePictures(characterId));
  }, [dispatch, characterId]);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }],
    speed: 500,
    afterChange: (current) => setSelectedIndex(current),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  if (loading) return <Loading />;
  if (error) return <ErrorPage error={error} />;

  return (
    <Container maxWidth="lg" sx={{marginTop: "2em"}}>
      <BackButton />
      <Box className="gallery-big-image">
        {pictures && pictures[selectedIndex] && (
          <img
            src={pictures[selectedIndex].jpg.image_url}
            alt={`Slide ${selectedIndex}`}
          />
        )}
      </Box>
      {pictures && pictures[selectedIndex] && (<Typography variant="body2" textAlign="right">{selectedIndex+1} / {pictures.length}</Typography>)}
      <Container>
        <Slider {...settings}>
          {pictures?.map((picture, index) => (
            picture && (
              <div
                key={index}
                className={`gallery-slide-item ${selectedIndex === index ? "selected" : ""}`}
                onClick={() => handleImageClick(index)}
              >
                <img src={picture.jpg.image_url} alt={`Slide ${index}`} />
              </div>
            )
          ))}
        </Slider>
      </Container>
    </Container>
  );
}

export default Gallery;
