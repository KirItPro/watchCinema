import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import FilmsAll from './component/films-all/films-all';
import Header from './component/header/Header';
import Promo from './component/promo/Promo';
import FavoritesBlock from './component/favorites-block/favorites';
import FilmInfo from './component/filmInfo/FilmInfo';
import Login from './component/login/login';
import Footer from './component/footer/footer';

function App() {
  const dataURL = 'https://yts.mx/api/v2/list_movies.json?limit=50';
  const [dataMovies, setMovies] = useState(null);

  useEffect(() => {
    axios.get(dataURL)
      .then(responce => {
        setMovies(responce.data.data.movies);
      })
      .catch((error) => {
        console.error('Ошибка здесь!' + error)
      })
  }, []);
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/watchCinema' element={<>
          <Promo />
          <FilmsAll dataAllFilms={dataMovies}/>
        </>} />
        <Route path='/promo' element={<Promo />} />
        <Route path='/all-films' element={<FilmsAll dataAllFilms={dataMovies} />} />
        <Route path='/film-info' element={<FilmInfo />} />
        <Route path='/favorites' element={<FavoritesBlock />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
