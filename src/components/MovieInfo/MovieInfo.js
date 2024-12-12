import { Typography, Grid, Box } from "@mui/material";
import { useEffect, useRef } from "react";
import "./AnimeInfo.css";
import assets from "../../assets/assets";
import movies from "../../assets/movies";

function MovieInfo({ movieId }) {
  const { title, poster, genre, time, date, rating } = movies[movieId - 1];

  const fontSize = { xs: "14px", sm: "16px", md: "18px", lg: "22px" };
  const fontSize2 = { xs: "22px", sm: "24px", md: "26px", lg: "30px" };

  const ratingRef = useRef();

  useEffect(() => {
    if (ratingRef.current && rating) {
      switch (rating) {
        case "G - All Ages":
          ratingRef.current.src = assets.age[0];
          break;
        case "PG - Children":
          ratingRef.current.src = assets.age[1];
          break;
        case "PG-13 - Teens 13 or older":
          ratingRef.current.src = assets.age[2];
          break;
        case "R - 17+ (violence & profanity)":
          ratingRef.current.src = assets.age[3];
          break;
        case "R+ - Mild Nudity":
          ratingRef.current.src = assets.age[4];
          break;
        default:
          ratingRef.current.src = "";
          break;
      }
    }
  }, [rating]);

  return (
    <>
      <Grid container sx={{}}>
        <Grid item xs={12} sm={12} md={4} lg={3} p={4}>
          <Box
            width="100%"
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={poster}
              alt={title}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                maxWidth: "250px",
                border: "#ccc 5px solid",
                borderRadius: "20px",
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={9}
          sx={{ p: { xs: 2, sm: 2, md: 3, lg: 4 } }}
          textAlign="left"
        >
          <Typography
            variant="h3"
            fontWeight="800"
            gutterBottom
            fontSize={fontSize2}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: fontSize }}
            fontWeight="700"
            gutterBottom
          >
            Genre: {genre}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: fontSize }}
            fontWeight="700"
            gutterBottom
          >
            Premiere Date: {date}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: fontSize }}
            fontWeight="700"
            gutterBottom
          >
            Duration: {time}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: fontSize }}
            fontWeight="700"
            gutterBottom
          >
            Rating:{" "}
            <img src="" alt="" ref={ratingRef} className="anime_rating" />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default MovieInfo;
