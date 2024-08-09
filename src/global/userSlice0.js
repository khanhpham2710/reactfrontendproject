import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tickets: [], 
};

const userSlice0 = createSlice({
    name: 'user0',
    initialState,
    reducers: {
        addTickets: (state, action) => {
            state.tickets = [...state.tickets,...action.payload]
            localStorage.setItem('userTickets', JSON.stringify(state.tickets));
        },
        removeTickets: (state, action) => {
            action.payload.forEach(item=>{
                state.tickets = state.tickets.filter(ticket =>{
                    return ticket == item
                })
            })
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

export const { addTickets, removeTickets, loadTicketsFromStorage } = userSlice0.actions;
export default userSlice0.reducer;
