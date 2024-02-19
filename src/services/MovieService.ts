// src/services/BookService.ts
import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const getBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?q=javascript`);
    return response.data.items.map((item: any) => ({
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors
        ? item.volumeInfo.authors.join(', ')
        : 'Unknown Author',
    }));
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const getMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTUxY2IwNzU5Y2Y4NjJmNjRlMzhlZWNmYzIyODk4NiIsInN1YiI6IjY1Y2Y1YmQxNzA2ZTU2MDE3OTM5OGI0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ww_yMQs5uCHDcmoTLqrnNw8VqPWJTYNGeKlKzN_SZVw',
        },
      },
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};
