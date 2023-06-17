import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '75863554b170222a0e5caae215e0183a';

export const fetchApi = {
  getTrendMovies() {
    return axios.get(`trending/all/day?api_key=${API_KEY}`);
  },

  getMovieById(id) {
    return axios.get(`movie/${id}?api_key=${API_KEY}`);
  },
};
