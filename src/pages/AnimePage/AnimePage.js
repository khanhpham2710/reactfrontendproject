import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimeDetails, fetchAnimeCharacters } from '../../global/animeSlice';
import Loading from '../../components/Loading/Loading';
import "./AnimePage.css"


function AnimePage() {
  const { animeId } = useParams();
  const dispatch = useDispatch();
  const { details, characters, status_loading, error } = useSelector((state) => state.anime);
  const [showMore, setShowMore] = useState(false)
  const [showMoreCharacter, setShowMoreCharacter] = useState(false)


  const {
    title, title_english, type, synopsis, trailer,
    source, episodes, duration, aired, status, season,
    images, rank, score, scored_by, popularity,
    rating, studios, producers, genres, demographics
  } = details


  useEffect(() => {
    dispatch(fetchAnimeDetails(animeId));
    dispatch(fetchAnimeCharacters(animeId));
  }, []);


  if (status_loading === 'loading') {
    return <Loading />
  }

  if (status_loading === 'failed') {
    return <div>Error: {error}</div>;
  }


  return (
    <div>
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
            {/* <p><span>Studio: </span><span>{studios[0].name || 'N/A'}</span></p> */}
          </div>
        </div>
        <p className='description'>
          {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
          <button onClick={() => {
            setShowMore(!showMore)
          }}>{showMore ? 'Show Less' : 'Read More'}</button>
        </p>
      </section>
    </div>
  );
}

export default AnimePage;
