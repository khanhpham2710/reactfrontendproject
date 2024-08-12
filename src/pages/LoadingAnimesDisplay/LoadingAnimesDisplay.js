import { Grid } from "@mui/material";
import LoadingAnimeCard from "../../components/LoadingAnimeCard/LoadingAnimeCard";



function LoadingAnimesDisplay() {
 

  return (<>
    <Grid container spacing={2} sx={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    }}>
        <Grid item>
          <LoadingAnimeCard/>
        </Grid>
        <Grid item>
          <LoadingAnimeCard/>
        </Grid>
        <Grid item>
          <LoadingAnimeCard/>
        </Grid>
        <Grid item>
          <LoadingAnimeCard/>
        </Grid>
        <Grid item>
          <LoadingAnimeCard/>
        </Grid>
        <Grid item>
          <LoadingAnimeCard/>
        </Grid>
        <Grid item>
          <LoadingAnimeCard/>
        </Grid>
        <Grid item>
          <LoadingAnimeCard/>
        </Grid>
    </Grid>
  </>)
}

export default LoadingAnimesDisplay;
