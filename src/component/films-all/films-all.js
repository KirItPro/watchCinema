
import './films-all.css';
import SPIN from '../../images/spin.gif';
import FilmCard from '../film-card/film-card';
import { useState } from 'react';

export default function FilmsAll({ dataAllFilms }) {
    const firstPage = dataAllFilms.slice(0, 8);
    const [listFilms, setListFilms] = useState(firstPage);
    const [page, setPage] = useState(8)
    function nextList(e) {
        e.preventDefault();
        setPage(page + 8);
        setListFilms(dataAllFilms.slice(page, page + 8));
    }
    function prevList(e) {
        e.preventDefault();
        setPage(page - 8);
        setListFilms(dataAllFilms.slice(page - 8, page));
    }
    return (

        <div className="films">
            <div className="films-list">
                {listFilms ?
                    listFilms.slice(0, 8).map(data => (
                        <FilmCard dataFilm={data} key={data.title} />)) :
                    <div className='films-spin'>
                        <p className='films-text_spin'>{'Загрузка...'}</p>
                        <img src={SPIN} alt='spin' />
                    </div>}
            </div>
            <div className='films-btns'>
                <button onClick={prevList} className={dataAllFilms[1].id == listFilms[1].id ? 'none' : 'films-btn prev'} >Назад</button>
                <button onClick={nextList} className={listFilms.length < 8 ? 'none' : 'films-btn next'}>Дальше</button>
            </div>
        </div>

    )
}