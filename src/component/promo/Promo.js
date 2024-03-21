import ReactPlayer from 'react-player';
import './promo.css';
// import BG_VIDEO from '../../video/bg-video.mp4';

const TRAILER = 'https://www.youtube.com/watch?v=fMNz-YApavw&t=11s';

export default function Promo() {    
    return (
        <div className="promo" >
            {/* <video src={BG_VIDEO} autoPlay muted loop className='promo-video'></video> */}
            <ReactPlayer
                className="promo-video"
                width='98vw'
                height='120%'
                loop={true}
                muted={true}
                playing={true}
                url={TRAILER} 
            />
            <h1 className="promo-title">смотри.кино</h1>
        </div>
    )
};
