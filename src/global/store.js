import { configureStore } from '@reduxjs/toolkit';
import upcomingReducer from './upcomingSlice';
import animeReducer from './animeSlice';
import characterReducer from './characterSlice';
import searchReducer from './searchSlice';
import popularReducer from './popularSlice';
import airingReducer from './airingSlice';

const store = configureStore({
  reducer: {
    upcoming: upcomingReducer,
    anime: animeReducer,
    character: characterReducer,
    search: searchReducer,
    popular: popularReducer,
    airing: airingReducer,
  },
});

export default store