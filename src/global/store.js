import { configureStore } from '@reduxjs/toolkit';
import animeReducer from './animeSlice';
import characterReducer from './characterSlice';
import searchReducer from './searchSlice';
import animeHomeSlice from './animeHomeSlice';
import topSlice from './topSlice';
import genreSlice from './genreSlice';
import userSlice0 from './userSlice0';
import movieBookingSlice0 from './movieBookingSlice0';
import movieBookingSlice from './movieBookingSlice';

const store = configureStore({
  reducer: {
    anime: animeReducer,
    top: topSlice,
    character: characterReducer,
    genre: genreSlice,
    search: searchReducer,
    animeHome: animeHomeSlice,
    user0: userSlice0,
    movieBooking0: movieBookingSlice0,
    movieBooking: movieBookingSlice
  },
});


export default store