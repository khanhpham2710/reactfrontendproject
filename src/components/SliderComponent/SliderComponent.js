import React, { useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import movies from '../../assets/movies';
import './SliderComponent.css';
import { ArrowForwardIos, ArrowBackIosNew } from '@mui/icons-material';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

function SliderComponent() {
  const [cur, setCur] = useState(0);

  const nextSlide = () => {
    setCur((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCur((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); 
    return () => clearInterval(timer); 
  }, []); 

  return (
    <div id="slider">
        <ArrowBackIosNew onClick={prevSlide} className='arrow' sx={{ fontSize: 40 }}/>
      <Slider key={movies[cur].id} movie={movies[cur]} />
      <div className='dot'>
      {movies.map((movie,index)=>{
        return index===cur?<CircleIcon key={index} sx = {{ cursor: "pointer" }}
         />:<CircleOutlinedIcon key={index} sx = {{ cursor: "pointer" }}
         onClick={()=>setCur(index)}/> })}
      </div>
        <ArrowForwardIos onClick={nextSlide} className='arrow' sx={{ fontSize: 40 }}/>
    </div>
  );
}

export default SliderComponent;