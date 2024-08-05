import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAiringAnime, fetchUpcomingAnime, fetchPopularAnime, fetchTopRatedAnime, fetchFavoriteAnime } from '../../global/animeHomeSlice';
import Loading from '../../components/Loading/Loading';
import AnimeScrollSlider from '../../components/AnimeScrollSlider/AnimeScrollSlider';
import SideBar from '../../components/SideBar/SideBar';

function Homepage() {
  const dispatch = useDispatch();
  const { popularAnime, airingAnime, upcomingAnime, topRatedAnime, favoriteAnime, loading, error } = useSelector((state) => state.animeList);

  useEffect(() => {
      dispatch(fetchPopularAnime());
      dispatch(fetchAiringAnime());
      dispatch(fetchUpcomingAnime());
      dispatch(fetchTopRatedAnime());
      dispatch(fetchFavoriteAnime());
  }, []);

  const isLoading = loading.popularAnime || loading.airingAnime || loading.upcomingAnime || loading.topRatedAnime || loading.favoriteAnime;

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{backgroundColor: "#000"}}>
      <SideBar />
      <AnimeScrollSlider list ={airingAnime} label="Airing"/>
      <AnimeScrollSlider list ={topRatedAnime} label="Top Rated"/>
      <AnimeScrollSlider list ={popularAnime} label="Most Popular"/>
      <AnimeScrollSlider list ={favoriteAnime} label="Most Favorite"/>
      <AnimeScrollSlider list ={upcomingAnime} label="Upcoming"/>
    </div>
  );
}

export default Homepage;
