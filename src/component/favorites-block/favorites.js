
import { useSelector } from 'react-redux';
import FilmFavorites from '../film-card/film-card';
import './favorites.css';

export default function FavoritesBlock() {
    const items = useSelector(state => state.favorites.itemsInFavorites);

    return (
        <div className='favorites'>
            <div className='favorites-block'>
                <h2 className="favorites-title">Избранное({items.length})</h2>
                {items.length ?
                    <div className="favorites-list">
                        {items.map(film =>
                            <div className="favorites-film" key={film.id}>
                                <FilmFavorites dataFilm={film} />
                            </div>
                        )}
                    </div> : <span className="favorites-null">Пусто</span>}
            </div>
        </div>

    )
}