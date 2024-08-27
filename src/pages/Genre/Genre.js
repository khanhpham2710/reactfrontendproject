import { Typography, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TopTable from '../../components/TopTable/TopTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from '../../global/topSlice';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));



function ChipsArray({ chipData, handleDelete}) {

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData && chipData?.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.mal_id}>
            <Chip
              label={data.name}
              onDelete={handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}

function Genre() {
  const dispatch = useDispatch();
  const { genresAnimes } = useSelector((state) => state.top);
  const { genres } = useSelector((state) => state.genre);
  const [genresList, setGenresList] = React.useState([1,2]);

  const [chipData, setChipData] = React.useState(genres);
  

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.mal_id !== chipToDelete.mal_id));
  };

  useEffect(() => {
    setChipData(genres);
  }, [genres]);


  useEffect(() => {
    const s = genresList.toString();
    dispatch(fetchGenres({genresList:s}));
  }, [genresList]);

  console.log(genresAnimes)
  

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
      <ChipsArray genres={genres} chipData={chipData} handleDelete={handleDelete}/>
      {/* <TopTable /> */}
    </Container>
  );
}

export default Genre;