import { Grid } from "@mui/material";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import MyPagination from "../../components/MyPagination/MyPagination";


function AnimesDisplay(prop) {
  const { animes, lastPage, page, handleChange } = prop

  return (<>
    <Grid container spacing={2} sx={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    }}>
      {animes?.map((anime, index) => (
        <Grid item key={index}>
          <AnimeCard item={anime} font={{
            xs: "25px",
            sm: "17px",
            md: "16px",
          }} />
        </Grid>
      ))}
    </Grid>
    <MyPagination lastPage={lastPage} page={page} handleChange={handleChange} />
  </>)
}

export default AnimesDisplay;
