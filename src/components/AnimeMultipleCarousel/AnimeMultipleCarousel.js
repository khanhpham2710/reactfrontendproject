import React from "react";
import Slider from "react-slick";
import AnimeCard from "../AnimeCard/AnimeCard";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;


    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                transform: "scale(2) translate(0%,-60%)",
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
            style={{ ...style, 
                display: "block", 
                transform: "scale(2) translate(0%,-60%)" }}
            onClick={onClick}
        />
    );
}


function AnimeMultipleCarousel(props) {
    const { list } = props;

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 3
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ],
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
      };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {list.map((item, index) => {
                    return <AnimeCard key={index} item={item} />
                })}
            </Slider>
        </div>
    );
}

export default AnimeMultipleCarousel;

