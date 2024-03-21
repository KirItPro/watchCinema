import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import FilmsAll from './component/films-all/films-all';
import Header from './component/header/Header';
import Promo from './component/promo/Promo';
import Home from './component/Home/Home';
import FavoritesBlock from './component/favorites-block/favorites';
import FilmInfo from './component/filmInfo/FilmInfo';
import Login from './component/login/login';

function App() {
  const dataURL = 'https://yts.mx/api/v2/list_movies.json?limit=50';  
  const[dataMovies, setMovies] = useState(null);

  useEffect(() => {
    axios.get(dataURL)
    .then(responce => {
      setMovies(responce.data.data.movies);
      // console.log(responce.data.data.movies)
    })
    .catch((error) => {
      console.log('Error happened here!')
      console.error(error)
    })
    }, []);  
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home dataAllFilms={dataMovies}/>}/>
        <Route path='/promo' element={<Promo/>}/>
        <Route path='/all-films' element={<FilmsAll dataAllFilms={dataMovies}/>}/> 
        <Route path='/film-info' element={<FilmInfo/>} />
        <Route path='/favorites' element={<FavoritesBlock/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
