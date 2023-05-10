import './App.css';
import {Routes, Route} from 'react-router';
import Login from './pages/login/login';
import Movies from './pages/movies/movies';
import MovieDetails from './pages/movieDetails/movieDetails';
import CreateMovies from './pages/createMovies/createMovies'

function App({list}) {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<Login/>}/>
            <Route path={'/movies'} element={<Movies/>}/>
            <Route path={'/movieDetails'} element={<MovieDetails/>}/>
            <Route path={'/movieDetails/:movieId'} element={<MovieDetails/>}/>
            <Route path={'/createMovies'} element={<CreateMovies/>}/>
            <Route path={'*'} element={<div><h1>Not Found</h1></div>}/>
        </Routes>
    </div>
  );
}

export default App;
