import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAiringAnime } from '../../global/airingSlice';
import { fetchPopularAnime } from '../../global/popularSlice';
import { fetchUpcomingAnime } from '../../global/upcomingSlice';


function Homepage() {
  const dispatch = useDispatch();
  const { popularAnime, loading: popularLoading } = useSelector((state) => state.popular);
  const { upcomingAnime, loading: upcomingLoading } = useSelector((state) => state.upcoming);
  const { airingAnime, loading: airingLoading } = useSelector((state) => state.airing);

  useEffect(() => {
    dispatch(fetchPopularAnime());
    dispatch(fetchAiringAnime());
    dispatch(fetchUpcomingAnime());
  }, [dispatch]);

  return (
      <div>
        Homepage
        
      </div>
  )
}

export default Homepage
