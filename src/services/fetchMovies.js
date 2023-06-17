import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '75863554b170222a0e5caae215e0183a';

export const fetchApi = {
  getTrendMovies() {
    return axios.get(`trending/movie/day?api_key=${API_KEY}`);
  },

  getMovieById(id) {
    return axios.get(`movie/${id}?api_key=${API_KEY}`);
  },

  getMovieByQuery(query) {
    return axios.get(`search/movie?query=${query}&api_key=${API_KEY}`);
  },

  getCreditsMovie(id) {
    return axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  },

  getReviewsMovie(id) {
    return axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  },
};
