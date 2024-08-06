import { Grid } from "@mui/material";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import MyPagination from "../../components/MyPagination/MyPagination";


function AnimesDisplay(prop) {
    const { animes, lastPage, page, handleChange } = prop

    return (<>
        <Grid container spacing={3}>
          {animes.map((anime, index) => (
            <Grid item key={index} lg={3} md={4} sm={6} xs={6}>
              <AnimeCard item={anime} />
            </Grid>
          ))}
        </Grid>
        <MyPagination lastPage={lastPage} page={page} handleChange={handleChange} />
    </>)
}

export default AnimesDisplay;
