import { Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
import Layout from './Layout/Layout';
import Movie from './pages/Movie/Movie';
import Movies from './pages/Movies/Movies';
import Home from './pages/Home/Home';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const Context = createContext();

export const App = () => {
  return (
    <Context.Provider value="https://image.tmdb.org/t/p/w500/">
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<Movie />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Context.Provider>
  );
};
