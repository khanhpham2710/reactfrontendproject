import React, { useCallback } from 'react';
import movies from '../../assets/movies';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import ShareIcon from '@mui/icons-material/Share';


function Ticket({ ticket, onClick, button_name, button_icon }) {
    const { movieId, date, time, row, num, seatNo } = ticket;
    const movie = movies[movieId - 1];

    const generateId = useCallback((movieId, date, time, row, num, userId) => {
        const [day, month, year] = date.split('/');

        const formattedDate = `${day}${month}${year.slice(-2)}`;
        const id = `${movieId}${formattedDate}${time.replace('-', '')}${row}${num}${userId}`;

        return btoa(id);
    }, []);

    const getWeekDays = useCallback((dateString) => {
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const [day, month, year] = dateString.split('/');

        const d = new Date(`${month}/${day}/${year}`);
        return weekday[d.getDay()];
    }, []);

    const ticketId = generateId(movieId, date, time, row, num);
    const weekday = getWeekDays(date);

    return (
        <Card sx={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={movie.background}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.title}
                    </Typography>
                    <Grid container columnSpacing={1} rowSpacing={2}>
                        <Grid item xs={6}>
                            {weekday} {date}
                        </Grid>
                        <Grid item xs={6}>
                            From {time.split("-")[0]}:00 to {time.split("-")[1]}:00
                        </Grid>
                        <Grid item xs={6}>
                            SeatNo: {seatNo}
                        </Grid>
                        <Grid item xs={6}>
                            Price: $4.99
                        </Grid>
                        <Grid item xs={12}>
                            TicketID: {ticketId}
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{display: "flex", justifyContent: "space-between", p:1}}>
                <Button startIcon={<ShareIcon />}></Button>
                <Button startIcon={button_icon} onClick={() => onClick(ticket)}>
                    {button_name}
                </Button>
            </CardActions>
        </Card>
    );
}

export default Ticket;
