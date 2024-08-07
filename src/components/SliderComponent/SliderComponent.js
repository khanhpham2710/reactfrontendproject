import React, { useState } from 'react';
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

  return (
    <div id="slider">
      <ArrowBackIosNew
        onClick={prevSlide}
        className='arrow'
        sx={{ 
          fontSize: 40, 
          color: '#fff' 
        }} 
      />
      <Slider key={movies[cur].id} movie={movies[cur]} />
      <div className='dot'>
        {movies.map((movie, index) => (
          index === cur 
            ? <CircleIcon 
                key={index} 
                sx={{ 
                  cursor: "pointer", 
                  fontSize: { xs: "12px", sm: "14px", md: "26px" }, 
                  color: '#fff' 
                }} 
              /> 
            : <CircleOutlinedIcon 
                key={index} 
                sx={{ 
                  cursor: "pointer", 
                  fontSize: { xs: "8px", sm: "10px", md: "20px" }, 
                  color: '#fff' 
                }} 
                onClick={() => setCur(index)} 
              />
        ))}
      </div>

      <ArrowForwardIos
        onClick={nextSlide}
        className='arrow'
        sx={{ 
          fontSize: 40, 
          color: '#fff' 
        }} 
      />
    </div>
  );
}

export default SliderComponent;
