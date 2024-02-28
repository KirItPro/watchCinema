import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button/button';
import { setItemInCart, deletedItemFromCart } from '../../redux/favorites/reducer';

export default function FilmCard({ dataFilm }) {
    const data = dataFilm;
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInFavorites = items.some(item => item.id === dataFilm.id);

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInFavorites) {
            dispatch(deletedItemFromCart(data.id));
        } else {
            dispatch(setItemInCart(data));
        }
    }
    return (
        <div
            className="film-list_item"
            key={data.id}
        >
            <Link
                to='/film-info'
                state={data}>
                <img src={data.medium_cover_image}
                    alt={data.imdb_code}
                    className="films-list_item-img" />
            </Link>
            <p className="films-list_item-title">{data.title}</p>
            <p className="films-list_item-year">{data.year}</p>
            <Button
                type={isItemInFavorites ? 'disable' : 'enable'}
                onClick={handleClick}
            >
                {isItemInFavorites ? 'убрать' : 'В избранное'}
            </Button>
        </div>
    )
}