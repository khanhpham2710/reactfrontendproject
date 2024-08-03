import "./AnimeScrollSlider.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import AnimeCard from "../AnimeCard/AnimeCard";

function AnimeList(props) {
  const { list, label } = props;
  const listRef = useRef();
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = listRef.current.scrollLeft;
      const maxScrollLeft = listRef.current.scrollWidth - listRef.current.clientWidth / 2;

      setShowPrev(scrollLeft > 0);
      setShowNext(scrollLeft < maxScrollLeft - 1);
    };

    const listElement = listRef.current;
    listElement.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      listElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleClick(flag) {
    const scrollAmount = listRef.current.clientWidth;
    if (flag) {
      listRef.current.scrollTo({
        left: listRef.current.scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    } else {
      listRef.current.scrollTo({
        left: listRef.current.scrollLeft - scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  const linkPath = label.toLowerCase();

  return (
    <Container maxWidth="xl">
      <div className='anime_scroll_slider'>
        <div className="label">
          <Link to={`/${linkPath}`}> <Typography variant="h3">{label} Anime</Typography></Link>
          <Link to={`/${linkPath}`}> <Typography variant="body2" component="p">More</Typography></Link>
        </div>
        <div className='anime_scroll_container'>
          {showPrev && (
            <button onClick={() => handleClick(false)}>
              <ArrowBackIosNewIcon />
            </button>
          )}
          <div ref={listRef} className='anime_scroll_list'>
            {list && list.map((item, index) => (
              <AnimeCard key={index} item={item}/>
            ))}
          </div>
          {showNext && (
            <button onClick={() => handleClick(true)}>
              <ArrowForwardIosIcon />
            </button>
          )}
        </div>
      </div>
    </Container>
  );
}

export default AnimeList;
