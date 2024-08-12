import { createSlice } from '@reduxjs/toolkit';

function randomSeat() {
    return Math.round(Math.random()) === 0 ? false : true;
}

const initialState = {
    schedule: [],
};

const movieBookingSlice = createSlice({
    name: 'movieBooking',
    initialState,
    reducers: {
        createSeats: (state, action) => {
            const { movieId, date, time } = action.payload
            if (!state.schedule.some(item => item.movieId === movieId && item.date === date && item.time === time)) {
                for (let i = 0; i < 10; i++) {
                    for (let j = 0; j < 10; j++) {
                        state.schedule.push({
                            movieId: movieId,
                            date: date,
                            time: time,
                            row: String.fromCharCode(65 + i),
                            num: j + 1,
                            seatNo: `${String.fromCharCode(65 + i)}${j + 1}`,
                            available: randomSeat(),
                            userId: null,
                        })
                    }
                }
            }
            localStorage.setItem('movieState', JSON.stringify(state.schedule));
        },
        bookSeats: (state, action) => {
            const { seats, userId } = action.payload;
            seats.forEach(seat => {
                const index = state.schedule.findIndex((item) => {
                    return item.movieId === seat.movieId &&
                        item.date === seat.date &&
                        item.time === seat.time &&
                        item.row === seat.row &&
                        item.num === seat.num
                })
                if (index >= 0) {
                    state.schedule[index].available = false
                    state.schedule[index].userId = userId
                }
            })
            localStorage.setItem('movieState', JSON.stringify(state.schedule));
        },
        unBookSeats: (state, action) => {
            const { seats } = action.payload;
            seats.forEach((seat) => {
                const index = state.schedule.findIndex((item) => {
                    return item.movieId === seat.movieId &&
                        item.date === seat.date &&
                        item.time === seat.time &&
                        item.row === seat.row &&
                        item.num === seat.num
                })
                if (index >= 0) {
                    state.schedule[index].available = true
                    state.schedule[index].userId = null
                }
            })
            localStorage.setItem('movieState', JSON.stringify(state.schedule));
        },
        loadMovieState: (state) => {
            const movieState = JSON.parse(localStorage.getItem('movieState'));
            if (movieState) {
                state.schedule = movieState;
            }
        }
    },
});

export const { createSeats, bookSeats, unBookSeats, loadMovieState } = movieBookingSlice.actions;
export default movieBookingSlice.reducer;
