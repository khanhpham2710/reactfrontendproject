import { createSlice } from '@reduxjs/toolkit';

// Helper function to generate seats
function generateSeats(date, time) {
    let seats = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            seats.push({
                date: date,
                time: time,
                row: String.fromCharCode(65 + i),
                num: j + 1,
                seatNo: `${String.fromCharCode(65 + i)}${j + 1}`,
                available: randomSeat(),
                userId: null
            });
        }
    }
    return seats;
}

// Helper function to randomly assign availability
function randomSeat() {
    return Math.round(Math.random()) === 0 ? false : true;
}

const initialState = {
    schedule: {},
};

const movieBookingSlice0 = createSlice({
    name: 'movieBooking0',
    initialState,
    reducers: {
        setDateTime: (state, action) => {
            const { date, time } = action.payload;
            if (!state.schedule[date]) {
                state.schedule[date] = {};
            }
            if (!state.schedule[date][time]) {
                state.schedule[date][time] = generateSeats(date, time);
            }
            localStorage.setItem('movieBookingState', JSON.stringify(state));
        },
        addSeats: (state, action) => {
            const { seats, userId } = action.payload;
            seats.forEach(seat => {
                const temp = state.schedule[seat.date][seat.time].map(item => {
                    if (item.row === seat.row && item.num === item.num) {
                        return { ...item, available: false, userId: userId }
                    } else {
                        return item
                    }
                });
                state.schedule[seat.date][seat.time] = temp
            });
            localStorage.setItem('movieBookingState', JSON.stringify(state));
        },
        deleteSeats: (state, action) => {
            const { seats, userId } = action.payload;
            seats.forEach(seat => {
                const temp = state.schedule[seat.date][seat.time].map(item => {
                    if (item.row === seat.row && item.num === item.num) {
                        return { ...item, available: true, userId: null }
                    } else {
                        return item
                    }
                });
                state.schedule[seat.date][seat.time] = temp
            });
            localStorage.setItem('movieBookingState', JSON.stringify(state));
        },
        loadFromStorage: (state) => {
            const storedState = JSON.parse(localStorage.getItem('movieBookingState'));
            if (storedState) {
                return { ...storedState };
            }
            return state;
        }
    },
});

export const { setDateTime, addSeats, deleteSeats, loadFromStorage } = movieBookingSlice0.actions;
export default movieBookingSlice0.reducer;
