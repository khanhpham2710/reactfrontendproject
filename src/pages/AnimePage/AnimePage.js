import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { fetchAnimeDetails, fetchAnimeCharacters, fetchAnimeReviews, fetchAnimeRecommendation, fetchAnimeRelations } from '../../global/animeSlice';
import Loading from '../../components/Loading/Loading';
import { Box, Typography, Divider, Container } from '@mui/material';
import AnimeInfo from '../../components/AnimeInfo/AnimeInfo';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AnimeSynopsis from "../../components/AnimeSynopsis/AnimeSynopsis";
import assets from '../../assets/assets';
import CharacterSection from '../CharactersSection/CharacterSection';
import styles from "./AnimePage.module.css"
import ErrorPage from '../ErrorPage/ErrorPage';
import PlayButton from '../../components/PlayButton/PlayButton';
import ReviewSection from "../../components/ReviewSection/ReviewSection"
import ReviewBox from "../../components/ReviewBox/ReviewBox"


function AnimePage() {
  const { animeId } = useParams();
  const dispatch = useDispatch();
  const { details, status_loading, error, characters, reviews } = useSelector((state) => state.anime);

  const [play, setPlay] = useState(false);

  const trailer = details?.trailer;

  const backGroundRef = useRef(null);
  const boxRef = useRef(null);

  const style = {
    position: 'absolute',
    bgcolor: 'background.paper',
    width: "100vw",
    zIndex: play ? -100000 : 0,
  };

  useEffect(() => {
    dispatch(fetchAnimeDetails(animeId));
    dispatch(fetchAnimeCharacters(animeId));
    dispatch(fetchAnimeReviews(animeId));
  }, [animeId, dispatch]);

  useEffect(() => {
    const img_url = trailer?.images?.maximum_image_url || assets.replace;
    if (backGroundRef.current) {
      backGroundRef.current.src = img_url;
      backGroundRef.current.onload = () => {
        if (boxRef.current) {
          const newTop = backGroundRef.current.clientHeight + window.innerHeight * 0.1;
          boxRef.current.style.top = `${newTop}px`;
        }
      };
    }
  }, [trailer]);

  if (status_loading === 'loading') {
    return <Loading />;
  }

  if (status_loading === 'failed') {
    return <ErrorPage error={error} />;
  }

  return (
    <Box>
      <Header play={play} />
      <Box sx={{ width: "100vw", position: 'fixed', zIndex: -5 }}>
        <img
          ref={backGroundRef}
          style={{ width: "100vw", aspectRatio: "16 / 9", zIndex: -6, position: "relative" }}
          alt={details.title}
        />
        {trailer?.images?.maximum_image_url && <PlayButton id={trailer.youtube_id} setPlay={setPlay} />}
      </Box>
      <Box ref={boxRef} sx={style}>
        <AnimeInfo details={details} />
        <Divider />
        <Typography variant='h4' className={styles.heading} mt={4} textAlign="center" fontWeight="800">Synopsis</Typography>
        <AnimeSynopsis details={details} />
        <Divider />
        <Typography variant='h4' className={styles.heading} mt={4} textAlign="center" fontWeight="800">Characters</Typography>
        <Container maxWidth="lg">
          <CharacterSection characters={characters} animeId={animeId} />
        </Container>
        <Divider />
        <Typography variant='h4' className={styles.heading} mt={4} textAlign="center" fontWeight="800">Reviews</Typography>
        <Container maxWidth="lg">
          <ReviewBox id={animeId}/>
          <ReviewSection reviews={reviews} id={animeId}/>
        </Container>
        <Divider />
        <Typography variant='h4' className={styles.heading} mt={4} textAlign="center" fontWeight="800">Recommendations</Typography>
        <Footer />
      </Box>
    </Box>
  );
}

export default AnimePage;
