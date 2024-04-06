
import './films-all.css';
import SPIN from '../../images/spin.gif';
import FilmCard from '../film-card/film-card';
import { useState } from 'react';
import { useEffect } from 'react';

export default function FilmsAll({ dataAllFilms }) {
    const [page, setPage] = useState(0);
    const [btnPrevClass, setPrevBtnClass] = useState('none');
    const [btnNextClass, setNextBtnClass] = useState('none');
    useEffect(() => {
        dataAllFilms ? setNextBtnClass('films-btn') : setNextBtnClass('none');
        console.log('hhh')
    }, [dataAllFilms])
    function nextList(e) {
        e.preventDefault();
        setPage(page + 8);
        dataAllFilms.slice(page + 8, page + 16).length < 8 ? setNextBtnClass('none') : setNextBtnClass('films-btn');
        setPrevBtnClass('films-btn');
    }
    function prevList(e) {
        e.preventDefault();
        setPage(page - 8);
        page <= 8 ? setPrevBtnClass('none') : setPrevBtnClass('films-btn');
        setNextBtnClass('films-btn')
    }

    return (
        <main>
            {dataAllFilms ?
                <div className="films">
                    <div className="films-list">
                        {dataAllFilms.slice(page, page + 8).map(data => (
                            <FilmCard dataFilm={data} key={data.title} />))}
                    </div>
                </div>
                :
                <div className='films-spin'>
                    <p className='films-text_spin'>{'Загрузка...'}</p>
                    <img src={SPIN} alt='spin' />
                </div>}
            <div className='films-btns'>
                <button onClick={prevList} className={btnPrevClass}>Назад</button>
                <button onClick={nextList} className={btnNextClass}>Дальше</button>
            </div>
        </main>
    )
}