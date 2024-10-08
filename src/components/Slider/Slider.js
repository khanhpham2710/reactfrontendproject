import React, { useEffect, useRef } from 'react';
import "./Slider.css";
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import MyButton from '../MyButton/MyButton';
import BookTicketButton from '../BookTicketButton/BookTicketButton';

function Slider({ movie }) {
    const ref = useRef();


    useEffect(() => {
        if (ref.current) {
            ref.current.style.backgroundImage = `url(${movie.background})`;
        }
    }, [movie.background]);

    return (
        <div ref={ref} className='slider'>
            <div className={movie.type === "right" ? "overlay slider_right" : "overlay slider_left"}>
                <Grid container className='slider_container'>
                    <Grid item xs={8} md={7} xl={5}>
                        <Box className='slider_details' sx={{
                            p: {
                                xs: "5px 15px",
                                sm: "10px 15px",
                                md: "10px 20px",
                                lg: "20px 35px",
                            }
                        }}>
                            <Typography
                                variant='h1'
                                sx={{
                                    textAlign: "left",
                                    mb: 2,
                                    fontSize: {
                                        xs: "17px",
                                        sm: "25px",
                                        md: "30px",
                                        lg: "50px",
                                    }
                                }}
                            >
                                {movie.title}
                            </Typography>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            textAlign: "left",
                                            fontSize: {
                                                xs: "10px",
                                                sm: "14px",
                                                md: "18px",
                                                lg: "24px",
                                            }
                                        }}>
                                        Genre:  {movie.genre}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            textAlign: "left",
                                            ml: 2,
                                            fontSize: {
                                                xs: "10px",
                                                sm: "14px",
                                                md: "18px",
                                                lg: "24px",
                                            }
                                        }}
                                    >
                                        Rating:  {movie.rating}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography
                                variant="h6"
                                sx={{
                                    textAlign: "left",
                                    fontSize: {
                                        xs: "10px",
                                        sm: "14px",
                                        md: "18px",
                                        lg: "24px",
                                    }
                                }}
                            >
                                Release date: {movie.date}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    textAlign: "left",
                                    fontSize: {
                                        xs: "10px",
                                        sm: "14px",
                                        md: "18px",
                                        lg: "24px",
                                    }
                                }}
                            >
                                Duration:  {movie.time}
                            </Typography>
                            <Typography
                                variant='body2'
                                sx={{
                                    overflow: 'hidden',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 8,
                                    display: {
                                        xs: "none",
                                        sm: "-webkit-box"
                                    },
                                    fontSize: {
                                        xs: "8px",
                                        sm: "12px",
                                        md: "14px",
                                        lg: "18px",
                                    }
                                }}
                                mt={1}
                            >
                                {movie.synopsis}
                            </Typography>
                            <Grid container sx={{ gap: "10px", justifyContent: "flex-end" }} className='slider_buttons' mt={1} pr={1}>
                                <Grid item>
                                    <Link>
                                        <MyButton context="READ MORE" display={{ xs: "block", sm: "none" }} icon={null} />
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <BookTicketButton movieID={movie.id}/>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Slider;