import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from './movies/moviesSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
