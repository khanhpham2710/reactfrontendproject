import React, { useEffect, useRef } from 'react';
import "./Slider.css";
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

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
                    <Grid item xs={12} md={6} xl={5}>
                        <div className='slider_details'>
                            <Typography variant='h1' gutterBottom>{movie.title}</Typography>
                            <Typography variant='body1'>{movie.synopsis}</Typography>
                            <Link to={`/book/${movie.id}`} className='book_ticket_button'>
                                <Button
                                    sx={{
                                        padding: "10px 20px",
                                        fontSize: "20px",
                                        borderRadius: "15px",
                                        fontWeight: 600,
                                        transition: "background-color 0.5s linear, color 0.5s linear",
                                        '&:hover': {
                                            backgroundColor: "red",
                                            color: "#fff"
                                        },
                                    }}
                                    variant='contained'
                                    endIcon={<SendIcon />}
                                    disableElevation>
                                    Book Ticket
                                </Button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Slider;
