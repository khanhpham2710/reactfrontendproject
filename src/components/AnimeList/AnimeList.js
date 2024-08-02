import "./AnimeList.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AnimeCard from '../AnimeCard/AnimeCard';
import { useState, useEffect, useRef } from 'react';

function AnimeList(props) {
  const { list, label } = props;
  const listRef = useRef();
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage(prev => (prev + 1) % list.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [list.length]);

  useEffect(() => {
    if (page >= list.length - 1) {
      setPage(0);
    }
  }, [page, list.length]);

  if (window.innerWidth <= 600) {
    return (
      <div className="anime_list" style={{width: "100%"}}>
        <h2>{label}</h2>
        <AnimeCard item={list[page]} style={{width: "100%"}} />
      </div>
    );
  }

  function handleClick(flag) {
    const scrollAmount = listRef.current.clientWidth / 2;
    if (flag) {
      listRef.current.scrollLeft += scrollAmount;
    } else {
      listRef.current.scrollLeft -= scrollAmount;
    }
  }

  return (
    <div className='anime_list'>
      <h2>{label}</h2>
      <div className='anime_list_container'>
        <button onClick={() => handleClick(false)}><ArrowBackIosNewIcon /></button>
        <div ref={listRef} className='anime_images'>
          {list && list.map((item, index) => (
            <AnimeCard key={index} item={item} />
          ))}
        </div>
        <button onClick={() => handleClick(true)}><ArrowForwardIosIcon /></button>
      </div>
    </div>
  );
}

export default AnimeList;
