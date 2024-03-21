import FilmsAll from "../films-all/films-all";
import Promo from "../promo/Promo";
import './home.css';

export default  function Home({dataAllFilms}) {
    
    return (
        <main>
            <Promo/>
            <FilmsAll dataAllFilms={dataAllFilms}/>
        </main>
    )
}