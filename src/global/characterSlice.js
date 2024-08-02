import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = "https://api.jikan.moe/v4";


export const fetchAnimePictures = createAsyncThunk
    ('character/fetchAnimePictures',
        async (id) => {
            const response = await axios.get(`${baseURL}/characters/${id}/pictures`);
            return response.data.data;
        });

const characterSlice = createSlice({
    name: 'character',
    initialState: {
        picture: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnimePictures.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAnimePictures.fulfilled, (state, action) => {
                state.picture = action.payload;
                state.loading = false;
            })
            .addCase(fetchAnimePictures.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default characterSlice.reducer;
