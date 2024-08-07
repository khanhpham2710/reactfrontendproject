import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimeDetails, fetchAnimeCharacters } from '../../global/animeSlice';
import Loading from '../../components/Loading/Loading';
import { Box } from '@mui/material';
import AnimeInfo from '../../components/AnimeInfo/AnineInfo';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SliderComponent from '../../components/SliderComponent/SliderComponent';

function AnimePage() {
  const { animeId } = useParams();
  const dispatch = useDispatch();
  const { details, status_loading, error } = useSelector((state) => state.anime);
  const trailer = details?.trailer;
  
  const darkMode = localStorage.getItem("darkMode") === "true";
  
  const backGroundRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    dispatch(fetchAnimeDetails(animeId));
    dispatch(fetchAnimeCharacters(animeId));
  }, [animeId, dispatch]);

  useEffect(() => {
    if (trailer?.images?.maximum_image_url && backGroundRef.current) {
      const handleLoad = () => {
        if (boxRef.current) {
          boxRef.current.style.top = `${backGroundRef.current.clientHeight}px`;
        }
      };
      backGroundRef.current.onload = handleLoad;
      backGroundRef.current.src = trailer.images.maximum_image_url;
      return () => {
        backGroundRef.current.onload = null;
      };
    }
  }, [trailer]);

  if (status_loading === 'loading') {
    return <Loading />;
  }

  if (status_loading === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <Box>
      <Header />
      {trailer?.images?.maximum_image_url ? (
        <img
          ref={backGroundRef}
          style={{ width: "100vw", aspectRatio: "16 / 9", position: 'fixed', zIndex: "-1" }}
          alt="Background"
        />
      ) : (
        <SliderComponent />
      )}
      <Box
        ref={boxRef} px={2} pt={6}
        style={{ position: "absolute", width: "100%", backgroundColor: darkMode ? "#000" : "#fff" }}
      >
        <AnimeInfo details={details} />
        <Footer />
      </Box>
    </Box>
  );
}

export default AnimePage;
