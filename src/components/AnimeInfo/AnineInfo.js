import { Typography, Grid, Box } from "@mui/material";
import assets from "../../assets/assets";
import { useState, useEffect, useRef } from "react";
import "./AnimeInfo.css"

function AnimeInfo({ details }) {
    const {
        title, title_english, type, synopsis,
        trailer, source, episodes, duration,
        aired, status, season, images, rank,
        score, scored_by, popularity, rating,
        studios, genres
    } = details;

    const scoreRef = useRef();
    const ratingRef = useRef();



    const [showMore, setShowMore] = useState(false)


    useEffect(() => {
        if (ratingRef.current && rating) {
            switch (rating) {
                case 'G - All Ages':
                    ratingRef.current.src = assets.age[0];
                    break;
                case 'PG - Children':
                    ratingRef.current.src = assets.age[1];
                    break;
                case 'PG-13 - Teens 13 or older':
                    ratingRef.current.src = assets.age[2];
                    break;
                case 'R - 17+ (violence & profanity)':
                    ratingRef.current.src = assets.age[3];
                    break;
                case 'R+ - Mild Nudity':
                    ratingRef.current.src = assets.age[4];
                    break;
                default:
                    ratingRef.current.src = "";
                    break;
            }
        }
    }, [rating]);

    useEffect(() => {
        if (scoreRef.current) {
            const ratingContent = scoreRef.current.innerHTML;
            const ratingScore = parseInt(ratingContent, 10) * 10;
            const scoreClass = ratingScore < 40 ? "bad" : ratingScore < 70 ? "meh" : "good";

            scoreRef.current.classList.add(scoreClass);

            const ratingColor = window.getComputedStyle(scoreRef.current).backgroundColor;
            const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;

            scoreRef.current.setAttribute("style", gradient);
            scoreRef.current.innerHTML = `<span>${ratingContent}</span>`;
        }
    }, [score]);


    return (<>
        <Grid container sx={{}}>
            <Grid item xs={12} sm={12} md={4} lg={3} p={4}>
                <Box width="100%" sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={images?.jpg.large_image_url} alt={title} style={{ width: '100%', height: 'auto', objectFit: 'cover', maxWidth: "250px", padding: "10px", border: "2px #fff solid", borderRadius: "20px" }} />
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={9} sx={{ p: { xs: 2, sm: 2, md: 3, lg: 4 } }} textAlign="left">
                <Typography variant='h3' fontWeight="800" gutterBottom>
                    {title_english || title}
                </Typography>
                <Grid container columnSpacing={1}>
                    <Grid item xs={12} sm={6} md={5} lg={4}>
                        <Typography variant='body1' sx={{ fontSize: { xs: "18px", sm: "16px", md: "18px", lg: "22px" } }} fontWeight="700" gutterBottom>
                            Type: {type || 'N/A'}
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: { xs: "18px", sm: "16px", md: "18px", lg: "22px" } }} fontWeight="700" gutterBottom>
                            Status: {status || 'N/A'}
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: { xs: "18px", sm: "16px", md: "18px", lg: "22px" } }} fontWeight="700" gutterBottom>
                            Source: {source || 'N/A'}
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: { xs: "18px", sm: "16px", md: "18px", lg: "22px" } }} fontWeight="700" gutterBottom>
                            Season: {season || 'N/A'}
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: { xs: "18px", sm: "16px", md: "18px", lg: "22px" } }} fontWeight="700" gutterBottom>
                            Rating: <img src="" alt="" ref={ratingRef} className="anime_rating"/>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={7} lg={8}>
                        <Typography variant='body1' sx={{ fontSize: { xs: "18px", sm: "16px", md: "18px", lg: "22px" } }} fontWeight="700" gutterBottom>
                            Aired: {aired?.string || 'N/A'}
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: { xs: "18px", sm: "16px", md: "18px", lg: "22px" } }} fontWeight="700" gutterBottom>
                            Episodes: {episodes || 'N/A'}
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: { xs: "18px", sm: "16px", md: "18px", lg: "22px" } }} fontWeight="700" gutterBottom>
                            Duration: {duration || 'N/A'}
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: { xs: "18px", sm: "16px", md: "18px", lg: "22px" } }} fontWeight="700" gutterBottom>
                            Studios: {studios?.map(studio => studio.name).join(', ') || 'N/A'}
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: { xs: "18px", sm: "16px", md: "18px", lg: "22px" } }} fontWeight="700" gutterBottom>
                            Genres: {genres?.map(genre => genre.name).join(', ') || 'N/A'}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container width="100%" my={2}>
                <Grid xs={4} item sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", gap: "15px" }}>
                    <Typography variant="h6" fontWeight="800" gutterBottom>Score</Typography>
                    <div ref={scoreRef} className='rating'>{score || "N/A"}</div>
                </Grid>
                <Grid xs={4} item sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", gap: "40px" }}>
                    <Typography variant="h6" fontWeight="800" gutterBottom>Rank</Typography>
                    <Typography variant="h6" fontWeight="800" fontSize="40px" gutterBottom># {rank || "N/A"}</Typography>
                </Grid>
                <Grid xs={4} item sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", gap: "40px" }}>
                    <Typography variant="h6" fontWeight="800" gutterBottom>Popularity</Typography>
                    <Typography variant="h6" fontWeight="800" fontSize="40px" gutterBottom>{popularity || 'N/A'}</Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={9} sx={{ p: { xs: 2, sm: 2, md: 3, lg: 4 } }} textAlign="left"></Grid>
        </Grid>
        <Typography variant='h3' textAlign="center" fontWeight="800" sx={{ p: { xs: 2, sm: 2, md: 3, lg: 4 } }}>Synopsis</Typography>
        <Typography variant='body1' textAlign="left" fontSize="24px" sx={{ p: { xs: 2, sm: 2, md: 3, lg: 4 } }}>{showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
            <button onClick={() => {
                setShowMore(!showMore)
            }}>{showMore ? 'Show Less' : 'Read More'}</button>
        </Typography>
    </>
    )
}

export default AnimeInfo