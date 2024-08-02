import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimeDetails, fetchAnimeCharacters } from '../../global/animeSlice';
import Loading from '../../components/Loading/Loading';

function AnimeItem() {
  const { animeId } = useParams();
  const dispatch = useDispatch();
  const { details, characters, status, error } = useSelector((state) => state.anime);
  const [showMore, setShowMore] = useState(false)
  const [showMoreCharacter, setShowMoreCharacter] = useState(false)

  const {
    title = 'N/A',
    synopsis = 'No synopsis available.',
    trailer = {},
    duration = 'N/A',
    aired = {},
    season = 'N/A',
    images = { jpg: { large_image_url: '' } },
    rank = 'N/A',
    score = 'N/A',
    scored_by = 'N/A',
    popularity = 'N/A',
    animeStatus = 'N/A',
    rating = 'N/A',
    source = 'N/A',
    studios = [],
  } = details || {};

  useEffect(() => {
    dispatch(fetchAnimeDetails(animeId));
    dispatch(fetchAnimeCharacters(animeId));
  }, []);


  if (status === 'loading') {
    return <Loading />
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="anime_item">
      <div className='details'>
        <div className='image'>
          <img src={images?.jpg.large_image_url} alt="" />
        </div>
        <div className='anime-details'>
          <h1>{title}</h1>
          <p><span>Aired: </span><span>{aired?.string || 'N/A'}</span></p>
          <p><span>Rating: </span><span>{rating || 'N/A'}</span></p>
          <p><span>Rank: </span><span>{rank || 'N/A'}</span></p>
          <p><span>Score: </span><span>{score || 'N/A'}</span></p>
          <p><span>Scored By: </span><span>{scored_by || 'N/A'}</span></p>
          <p><span>Popularity: </span><span>{popularity || 'N/A'}</span></p>
          <p><span>Status: </span><span>{status || 'N/A'}</span></p>
          <p><span>Source: </span><span>{source || 'N/A'}</span></p>
          <p><span>Season: </span><span>{season || 'N/A'}</span></p>
          <p><span>Duration: </span><span>{duration || 'N/A'}</span></p>
          <p><span>Studio: </span><span>{studios.length > 0 ? studios[0].name : 'N/A'}</span></p>
          
        </div>
      </div>
      <p className='description'>
        {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
        <button onClick={() => {
          setShowMore(!showMore)
        }}>{showMore ? 'Show Less' : 'Read More'}</button>
      </p>
    </section>
  );
}

export default AnimeItem;
