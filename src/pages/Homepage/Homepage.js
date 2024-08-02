import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAiringAnime, fetchUpcomingAnime, fetchPopularAnime } from '../../global/animeListSlice';
import Loading from '../../components/Loading/Loading';
import AnimeList from '../../components/AnimeList/AnimeList';
import SideBar from "../../components/SideBar/SideBar"

function Homepage() {
  const dispatch = useDispatch();
  const { popularAnime, airingAnime, upcomingAnime, loading, error } = useSelector((state) => state.animeList);

  useEffect(() => {
    dispatch(fetchPopularAnime());
    dispatch(fetchAiringAnime());
    dispatch(fetchUpcomingAnime())
  }, []);

  // console.log(popularAnime)
  // console.log(airingAnime)
  // console.log(upcomingAnime)

  if (loading.popularAnime || loading.airingAnime || loading.upcomingAnime) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <AnimeList list ={airingAnime} label="Airing Anime"/>
      <AnimeList list ={popularAnime} label="Popular Anime"/>
      <AnimeList list ={upcomingAnime} label="Upcoming Anime"/>
      <SideBar />
    </div>
  );
}

export default Homepage;
