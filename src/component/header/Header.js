import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header-menu">
            <Link to='/' className="header-menu_button">Главная</Link>
            <Link to='/all-films' className="header-menu_button">Фильмы</Link>
            <Link to='/' className="header-menu_button">Сериалы</Link>
            <Link to='/favorites' className="header-menu_button">Избранное</Link>
            </div>
        </header>
    )
}