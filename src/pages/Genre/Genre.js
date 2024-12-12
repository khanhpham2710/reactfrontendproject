import { Typography, Container } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import AnimesDisplay from '../AnimesDisplay/AnimesDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from '../../global/topSlice';
import LoadingAnimesDisplay from '../LoadingAnimesDisplay/LoadingAnimesDisplay';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useParams } from 'react-router-dom';


function ComboBox({genres, setGenresList, defaultValue}) {


  const handleChange = (event, value) => {
    setGenresList(value.map(item=>item.mal_id))
  };

  console.log(genres[1])
  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={genres}
      getOptionLabel={(option) => option.name}
      defaultValue={defaultValue}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          label="Genres"
        />
      )}
      onChange={handleChange}
      sx={{my : 6}}
    />
  );
}


function Genre() {
  const dispatch = useDispatch();
  const { genresAnimes, lastPage, loading } = useSelector((state) => state.top);
  const { genres } = useSelector((state) => state.genre);
  const [genresList, setGenresList] = React.useState([1,2]);
  const [chipData, setChipData] = React.useState(genres);
  const [page,setPage] = React.useState(1);

  const { genreId } = useParams();

  const defaultValue = useMemo(()=>{
    const index = genres?.findIndex(item => item.mal_id == genreId);
    return index !== -1 ? [genres[index]] : [];
  },[genreId, genres])

  
  

  function handleAdd(id){
    if(!genresList.includes(id)){
      setGenresList([...genresList,id])
    }
  }

  

  useEffect(() => {
    setChipData(genres);
  }, [genres]);


  useEffect(() => {
    const s = genresList.toString();
    dispatch(fetchGenres({genresList:s, page: page}));
  }, [genresList,page]);

  function handleChange(newPage){
    setPage(newPage);
  }
  

  return (
    <Container maxWidth="lg" px={2} my={2}>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '8px',
          fontSize: {
            xs: '40px',
            sm: '50px',
            md: '60px',
            lg: '70px',
          },
          textAlign: 'center',
          marginTop: '2em',
        }}
        gutterBottom
      >
        Genres
      </Typography>
      <ComboBox genres={genres} setGenresList={setGenresList} defaultValue={defaultValue}/>
      {loading ? <LoadingAnimesDisplay />: 
      <AnimesDisplay animes={genresAnimes} lastPage={lastPage} page={page} handleChange={handleChange}/>}
    </Container>
  );
}

export default Genre;