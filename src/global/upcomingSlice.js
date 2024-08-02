import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = "https://api.jikan.moe/v4";


export const fetchUpcomingAnime = createAsyncThunk(
    'upcoming/fetchUpcomingAnime',
    async () => {
        const response = await axios.get(`${baseURL}/top/anime?filter=upcoming&limit=15`);
        return response.data.data;
    });

const upcomingSlice = createSlice({
    name: 'upcoming',
    initialState: {
        upcomingAnime: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpcomingAnime.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUpcomingAnime.fulfilled, (state, action) => {
                state.upcomingAnime = action.payload;
                state.loading = false;
            })
            .addCase(fetchUpcomingAnime.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default upcomingSlice.reducer;
