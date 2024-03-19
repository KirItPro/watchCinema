
import './films-all.css';
import SPIN from '../../images/spin.gif';
import FilmCard from '../film-card/film-card';

export default function FilmsAll({ dataAllFilms }) {
    return (

        <div className="films">
            <div className="films-list">
                {dataAllFilms ?
                    dataAllFilms.slice(0, 8).map(data => (
                        <FilmCard dataFilm={data} key={data.title}/>)) :
                    <div className='films-spin'>
                        <p className='films-text_spin'>{'Загрузка...'}</p>
                        <img src={SPIN} alt='spin' />
                    </div>}
            </div>
        </div>

    )
}