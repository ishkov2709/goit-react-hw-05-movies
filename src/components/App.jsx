import { Route, Routes } from 'react-router-dom';
import { createContext, lazy } from 'react';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const Movie = lazy(() => import('./Movie/Movie'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
