import FilmsAll from "../films-all/films-all";
import Promo from "../promo/Promo";

export default  function Home({dataAllFilms}) {
    
    return (
        <>
            <Promo/>
            <FilmsAll dataAllFilms={dataAllFilms}/>
        </>
    )
}