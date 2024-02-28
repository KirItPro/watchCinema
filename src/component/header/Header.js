import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
    const items = useSelector(state => state.favorites.itemsInFavorites);
    return (
        <header className="header">
            <div className="header-menu">
            <Link to='/' className="header-menu_button">Главная</Link>
            <Link to='/all-films' className="header-menu_button">Фильмы</Link>
            <Link to='/' className="header-menu_button">Сериалы</Link>
            <Link to='/favorites' className="header-menu_button">Избранное(<div className='header-menu_button__count'>{items.length}</div>)</Link>
            </div>
        </header>
    )
}