// import { createSlice } from '@reduxjs/toolkit';

// // Helper function to generate seats
// function generateSeats(movieId, date, time) {
//     let seats = [];
//     for (let i = 0; i < 10; i++) {
//         for (let j = 0; j < 10; j++) {
//             seats.push({
//                 movieId: movieId,
//                 date: date,
//                 time: time,
//                 row: String.fromCharCode(65 + i),
//                 num: j + 1,
//                 seatNo: `${String.fromCharCode(65 + i)}${j + 1}`,
//                 available: randomSeat(),
//                 userId: null,
//             });
//         }
//     }
//     return seats;
// }


// function randomSeat() {
//     return Math.round(Math.random()) === 0 ? false : true;
// }

// const initialState = {
//     schedule: {},
// };

// const movieBookingSlice0 = createSlice({
//     name: 'movieBooking0',
//     initialState,
//     reducers: {

//         setDateTime: (state, action) => {
//             const { movieId, date, time } = action.payload;

//             if (!state.schedule[movieId]) {
//                 state.schedule[movieId] = {};
//             }

//             if (!state.schedule[movieId][date]) {
//                 state.schedule[movieId][date] = {};
//             }

//             if (!state.schedule[movieId][date][time]) {
//                 state.schedule[movieId][date][time] = generateSeats(movieId, date, time);
//             }

//             try {
//                 localStorage.setItem('movieState', JSON.stringify({
//                     schedule: state.schedule
//                 }));
//             } catch (error) {
//                 console.error('Error saving state to localStorage:', error);
//             }
//         },
//         addSeats: (state, action) => {
//             const { seats, userId } = action.payload;
//             const temp = JSON.parse(JSON.stringify(state.schedule))
//             seats.forEach(seat => {
//                 temp[seat.movieId][seat.date][seat.time].forEach(item => {
//                     if (item.row === seat.row && item.num === seat.num) {
//                         item.available = false
//                         item.userId = userId
//                     }
//                 });
//             });
//             state.schedule = temp;
//             localStorage.setItem('movieState', JSON.stringify(state));
//         },
//         deleteSeats: (state, action) => {
//             const { seats } = action.payload;
//             let temp_state = JSON.parse(JSON.stringify(state.schedule))
//             seats.forEach((seat, index) => {
//                 if (temp_state[seat.movieId][seat.date] && temp_state[seat.movieId][seat.date][seat.time]) {
//                     temp_state[seat.movieId][seat.date][seat.time].map((item) => {
//                         if (item.row === seat.row && item.num === seat.num) {
//                             item.available = true
//                             item.userId = null
//                         }
//                     })
//                 }
//             });
//             state.schedule = temp_state
//             localStorage.setItem('movieState', JSON.stringify(state));
//         },
//         loadFromStorage: (state) => {
//             const movieState = JSON.parse(localStorage.getItem('movieState'));
//             if (movieState) {
//                 state.schedule = movieState.schedule;
//             }
//         }
//     },
// });

// export const { setDateTime, addSeats, deleteSeats, loadFromStorage } = movieBookingSlice0.actions;
// export default movieBookingSlice0.reducer;
