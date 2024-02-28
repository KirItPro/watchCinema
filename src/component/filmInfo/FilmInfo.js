import './filmInfo.css';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

function FilmInfo() {
    const location = useLocation();
    const film = location.state;
    return (
        <div className="film-info" 
            style={{backgroundImage:`url(${film.background_image_original})`, 
                backgroundColor: 'gray'}}>
            <div className="film-left-part">
                <h2>{film.title_long}</h2>
                <p className="film-synopsis">{film.synopsis}</p>
                <div className="film-rating">{'Рейтинг: ' + film.rating}</div>
                <div className="film-genres">{'Жанр: ' + film.genres.join(', ')}</div>
                <div className="film-play">смотреть</div>
                <Link className="film-btn-download" to={film.torrents[1].url} >СКАЧАТЬ</Link>
            </div>
            <img className="film-poster" src={film.medium_cover_image} alt='poster'/>
        </div>

    )
};

export default FilmInfo;