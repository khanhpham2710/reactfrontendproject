import { createSlice } from '@reduxjs/toolkit';

// Utility function to create initial seating arrangement
const generateSeating = () => {
    const rows = [];
    for (let i = 0; i < 10; i++) {
        const seats = [];
        for (let j = 0; j < 10; j++) {
            seats.push({ seatNo: `${String.fromCharCode(65 + i)}${j}`, available: randomSeat(), id: null });
        }
        rows.push(seats);
    }
    return rows;
};

function randomSeat(){
    return Math.round(Math.random()) === 0 ? false : true;
}

const initialState = {
    schedule: {}, // Organized as [date][time][row][seat]
    selectedSeats: [], // To store seats selected with customer ID
};

const movieBookingSlice = createSlice({
    name: 'movieBooking',
    initialState,
    reducers: {
        setDateTime: (state, action) => {
            const { date, time } = action.payload;
            if (!state.schedule[date]) {
                state.schedule[date] = {};
            }
            if (!state.schedule[date][time]) {
                state.schedule[date][time] = generateSeating();
            }
            localStorage.setItem('movieBookingState', JSON.stringify(state));
        },
        selectSeat: (state, action) => {
            const { date, time, row, seat, customerId } = action.payload;
            const seatInfo = state.schedule[date][time][row][seat];
            if (seatInfo.available) {
                seatInfo.available = false; // Mark seat as booked
                seatInfo.id = customerId; // Store customer ID
                state.selectedSeats.push({ date, time, row, seat, customerId });
            }
            localStorage.setItem('movieBookingState', JSON.stringify(state));
        },
        deselectSeat: (state, action) => {
            const { date, time, row, seat } = action.payload;
            const seatInfo = state.schedule[date][time][row][seat];
            if (!seatInfo.available) {
                seatInfo.available = true; // Mark seat as available
                seatInfo.id = null; // Clear customer ID
                state.selectedSeats = state.selectedSeats.filter(item => 
                    !(item.date === date && item.time === time && item.row === row && item.seat === seat)
                );
            }
            localStorage.setItem('movieBookingState', JSON.stringify(state));
        },
        loadFromStorage: (state) => {
            const storedState = JSON.parse(localStorage.getItem('movieBookingState'));
            if (storedState) {
                return storedState;
            }
        }
    },
});

export const { setDateTime, selectSeat, deselectSeat, loadFromStorage } = movieBookingSlice.actions;
export default movieBookingSlice.reducer;
