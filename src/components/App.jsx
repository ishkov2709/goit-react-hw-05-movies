import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Movie from './pages/Movie/Movie';
import Movies from './pages/Movies/Movies';
import Home from './pages/Home/Home';
import { createContext } from 'react';

export const Context = createContext();

export const App = () => {
  console.log('App');
  return (
    <Context.Provider value="https://image.tmdb.org/t/p/w500/">
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<Movie />} />
          </Route>
        </Routes>
      </div>
    </Context.Provider>
  );
};
