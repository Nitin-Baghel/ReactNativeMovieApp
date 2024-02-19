import axios from 'axios';
import {setLoading, setMovies} from './moviesSlice';

export const getMovies: any = () => async (dispatch: any) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmU2ZmQ5NmJkYTQ2ZjNkODk3MWY0YTFlZTdkZmM1NSIsInN1YiI6IjY1ZDJlNGEzNGQ2NzkxMDE4NmQzYTg2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t0HGQ0z5zJhhyuEHBaf6-wiS_GdRUM-TcCL8u1rI7fc',
        },
      },
    );

    let data = response.data.results;
    dispatch(setMovies(data));
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
  dispatch(setLoading(false));
};
