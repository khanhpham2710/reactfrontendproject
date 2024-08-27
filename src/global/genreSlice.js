import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchGenres = createAsyncThunk(
    'genre/fetchGenres',
    async () => {
        const response = await axios.get(`https://api.jikan.moe/v4/genres/anime?filter=genres`);
        return response.data.data;
    });

const genreSlice = createSlice({
    name: 'genre',
    initialState: {
        genres: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGenres.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
                state.loading = false;
            })
            .addCase(fetchGenres.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default genreSlice.reducer;
