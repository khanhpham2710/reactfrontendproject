import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimeDetails, fetchAnimeCharacters } from '../../global/animeSlice';
import styled from 'styled-components';
import Loading from '../../components/Loading/Loading';

function AnimeItem() {
  const { animeId } = useParams();
  const dispatch = useDispatch();
  const { details, characters, status, error } = useSelector((state) => state.anime);

  useEffect(() => {
    dispatch(fetchAnimeDetails(animeId));
    dispatch(fetchAnimeCharacters(animeId));
  }, []);

  // console.log(details)
  // console.log(characters)

  if (status === 'loading') {
    return <Loading />
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
      <div className="animeitem">
      
      </div>
  );
}

export default AnimeItem;
