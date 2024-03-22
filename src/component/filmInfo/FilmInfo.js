import './filmInfo.css';
import ReactPlayer from 'react-player/youtube';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

const TRAILER = 'https://www.youtube.com/watch?v=R0MG5_wfRmQ';

function FilmInfo() {
    const location = useLocation();
    const film = location.state;
    return (
        <div className="film">
            <div className="film-info"
                style={{
                    backgroundImage: `url(${film.background_image_original})`,
                    backgroundColor: 'gray'
                }}>
                <div className="film-left-part">
                    <h2 className='film-title'>{film.title_long}</h2>
                    <p className="film-synopsis">{film.synopsis.length > 600 ? film.synopsis.slice(0, 600)+' ...' : film.synopsis}</p>
                    <div className="film-rating">{'Рейтинг: ' + film.rating}</div>
                    <div className="film-genres">{'Жанр: ' + film.genres.join(', ')}</div>
                    <Link className="film-btn-download" to={film.torrents[1].url} >СКАЧАТЬ</Link>
                </div>
                <img className="film-poster" src={film.medium_cover_image} alt='poster' />
            </div>
            <h3 className="filv-video_title">Смотреть</h3>
            <ReactPlayer
                className="film-play"
                controls={true}
                width='90vw'
                height='45vw'
                url={TRAILER} 
            />
        </div>
    )
};

export default FilmInfo;