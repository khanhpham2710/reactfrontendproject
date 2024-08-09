import { createSlice } from '@reduxjs/toolkit';

// Initial state for user tickets
const initialState = {
    tickets: [], // Array to store user tickets
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addTicket: (state, action) => {
            state.tickets.push(action.payload); // Append new tickets
            localStorage.setItem('userTickets', JSON.stringify(state.tickets));
        },
        removeTicket: (state, action) => {
            state.tickets = state.tickets.filter(ticket =>
                !(ticket.date === action.payload.date && ticket.time === action.payload.time &&
                ticket.row === action.payload.row && ticket.seat === action.payload.seat)
            );
            localStorage.setItem('userTickets', JSON.stringify(state.tickets));
        },
        loadTicketsFromStorage: (state) => {
            const storedTickets = JSON.parse(localStorage.getItem('userTickets'));
            if (storedTickets) {
                state.tickets = storedTickets;
            }
        }
    },
});

export const { addTicket, removeTicket, loadTicketsFromStorage } = userSlice.actions;
export default userSlice.reducer;
