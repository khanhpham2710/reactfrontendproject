import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSeats, bookSeats, loadMovieState } from '../../global/movieBookingSlice';
import { addTickets } from '../../global/userSlice0';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Autocomplete, TextField, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import SelectedList from '../../components/SelectedList/SelectedList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Seat from '../../components/Seat/Seat';
import { useAuth } from '../../global/authContext/authContext';

const timeOptions = [
    { label: '8-10' },
    { label: '10-12' },
    { label: '12-14' },
    { label: '14-16' },
    { label: '16-18' },
    { label: '18-20' },
    { label: '20-22' }
];

const BookTicket = () => {
    const { movieId } = useParams();
    const { currentUser, userLoggedIn } = useAuth()
    const navigate = useNavigate()

    const dispatch = useDispatch();
    const { schedule } = useSelector(state => state.movieBooking);

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const [seats, setSeats] = useState([])
    const [selectedList, setSelectedList] = useState([]);

    useEffect(()=>{
        if (!userLoggedIn){
            navigate("/login")
        }
    },[navigate, userLoggedIn])

    const handleStart = () => {
        dispatch(createSeats({ movieId: movieId, date: date, time: time }));
        dispatch(loadMovieState());
    }

    useEffect(() => {
        if (schedule){
        const temp = schedule.filter((item) => {
            return item.movieId === movieId && item.date === date && item.time === time
        })
        setSeats(temp)}
    }, [schedule,date,time,movieId])

    function handleSeatClick(row, num, selected) {
        if (selected) {
            const temp = {
                movieId: movieId,
                date: date,
                time: time,
                row: row,
                num: num,
                seatNo: row + num,
                userId: currentUser.uid
            };
            const check = selectedList.findIndex(item =>
                item.row === row && 
                item.num === num && 
                item.movieId === movieId && 
                item.date === date && 
                item.time === time
            );
            if (check < 0) {
                setSelectedList(prev => [...prev, temp]);
            }
        } else {
            setSelectedList(prev => prev.filter(item =>
                !(item.row === row && item.num === num && item.movieId === movieId && item.date === date && item.time === time)
            ));
        }
    }

    const handleBookTickets = () => {
        try {
            dispatch(bookSeats({ seats: selectedList, userId: currentUser.uid, movieId: movieId }));
            dispatch(addTickets(selectedList));
            alert('Tickets booked successfully!');
            dispatch(loadMovieState());
        } catch (err) {
            console.error(err);
            alert("There has been an error. Please try again.");
        }
    };

    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <Typography variant='h3' textAlign="center" fontWeight="700" letterSpacing={1} mt="14vh">Movie Booking</Typography>
                <Box>
                    <MovieInfo movieId={movieId} />
                </Box>
                <Grid container columnSpacing={2}>
                    <Grid item xs={6} lg={5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Typography variant='h5'>Date</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                defaultValue={dayjs('2024-08-12')}
                                onChange={(newValue) => setDate(dayjs(newValue).format('DD/MM/YYYY'))}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={6} lg={5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Typography variant='h5'>Time:</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={timeOptions}
                            onChange={(e, value) => setTime(value?.label || '')}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Grid>
                    <Grid item xs={12} lg={2} sx={{ display: "flex", justifyContent: "center" }}>
                        <Button sx={{ height: "70px", width: "80%", maxWidth: "180px", fontSize: "20px", transform: "translateY(24%)" }} variant="contained" onClick={handleStart}>Start</Button>
                    </Grid>
                </Grid>
                <Box mt={6}>
                    <Typography variant='h5' textAlign="center" gutterBottom mb={3}>Seats</Typography>
                    <Box width="100%" minHeight="600px">
                        <Grid container spacing={1}>
                            {date && time && schedule && seats && (
                                seats.map((seat, seatId) => (
                                    <Grid item xs={2.4} sm={1.2} key={seatId}>
                                        <Seat
                                            seat={seat}
                                            handleSeatClick={handleSeatClick}
                                        />
                                    </Grid>
                                ))
                            )}
                        </Grid>
                    </Box>
                </Box>
                
                <SelectedList list={selectedList} handleSeatClick={handleSeatClick} handleBookTickets={handleBookTickets} />
            </Container>
            <Footer />
        </>
    );
};

export default BookTicket;
