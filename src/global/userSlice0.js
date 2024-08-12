import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tickets: [],
    favorite: []
};



const userSlice0 = createSlice({
    name: 'user0',
    initialState,
    reducers: {
        addTickets: (state, action) => {
            const temp = JSON.parse(JSON.stringify(state.tickets));

            action.payload.forEach(item => {
                const exists = temp.some(ticket =>
                    ticket.movieId === item.movieId &&
                    ticket.date === item.date &&
                    ticket.time === item.time &&
                    ticket.row === item.row &&
                    ticket.num === item.num &&
                    ticket.userId === item.userId
                );
                if (!exists) {
                    state.tickets.push(item);
                }
            });
            localStorage.setItem('userTickets', JSON.stringify(state.tickets));
        },
        removeTickets: (state, action) => {
            action.payload.forEach(item => {
                state.tickets = state.tickets.filter(ticket => {
                    const temp = action.payload.find(item =>
                        ticket.date === item.date &&
                        ticket.time === item.time &&
                        ticket.row === item.row &&
                        ticket.num === item.num &&
                        ticket.userId === item.userId
                    );
                    return item !== temp
                });
            });
            localStorage.setItem('userTickets', JSON.stringify(state.tickets));
        },
        loadTicketsFromStorage: (state) => {
            const storedTickets = JSON.parse(localStorage.getItem('userTickets'));
            console.log(storedTickets)
            if (storedTickets) {
                state.tickets = storedTickets;
            }
        },
        addFavorite: (state,action) =>{
            const index = state.favorite.findIndex(item => item.id === action.payload.id)
            if (index !== -1) state.favorite[index] = action.payload
            else state.favorite.push(action.payload)
            localStorage.setItem("userFavorite", JSON.stringify(state.favorite))
        },
        removeFavorite: (state,action) =>{
            state.favorite = state.favorite.filter(item => item.id !== action.payload)
            localStorage.setItem("userFavorite", JSON.stringify(state.favorite))
        },
        loadFavorite: (state) => {
            const storedFavorite = JSON.parse(localStorage.getItem('userFavorite'));
            if (storedFavorite) {
                state.favorite = storedFavorite;
            }
        }
    },
});

export const { addTickets, removeTickets, loadTicketsFromStorage, addFavorite, removeFavorite,loadFavorite } = userSlice0.actions;
export default userSlice0.reducer;
