import './promo.css';
import BG_VIDEO from '../../video/bg-video.mp4';

export default function Promo() {    
    return (
        <div className="promo" >
            <video src={BG_VIDEO} autoPlay muted loop className='promo-video'></video>
            <h1 className="promo-title">смотри кино</h1>
        </div>
    )
};
