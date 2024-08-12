import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchAnime } from '../../global/searchSlice';
import LoadingAnimesDisplay from '../LoadingAnimesDisplay/LoadingAnimesDisplay';
import AnimesDisplay from '../AnimesDisplay/AnimesDisplay';
import { Typography, Container,Grid } from '@mui/material';


function SearchPage(prop) {
  const { searchTerm } = useParams();

  const dispatch = useDispatch();
  const { searchResults, isSearch, loading, error, total, lastPage } = useSelector((state) => state.search);

  const [page, setPage] = useState(1);
  const [params, setParams] = useState({ query: searchTerm, page });

  function handleChange(newPage){
    setPage(newPage);
    setParams(prev => ({ ...prev, page: newPage }));
}

  useEffect(() => {
    setParams({ query: searchTerm, page });
  }, [searchTerm, page]);

  useEffect(() => {
    dispatch(searchAnime(params));
  }, [params, dispatch]);


  if (error) {
    return <div>Error: {error}</div>;
  }

  const heading = searchTerm.replace("+"," ")

  return (
    <div>
      <Typography variant="h1" sx={{
        fontWeight: 700, textTransform: "uppercase", letterSpacing: "8px", textAlign: "center",fontSize: {
          xs: "60px",
          sm: "70px",
          md: "80px",
          lg: "80px",
        }
      }} gutterBottom>{heading}</Typography>
      <Container maxWidth="lg">
        {loading ? <LoadingAnimesDisplay />: 
        <AnimesDisplay animes={searchResults} lastPage={lastPage} page={page} handleChange={handleChange}/>}
      </Container>
    </div>
  );
}

export default SearchPage;
