import './HomeBanner.css'
import { Link } from 'react-router-dom';

function HomeBanner(){
    return(
        <div className='main'>
            <div className='title'>
                <h1>Find your next match</h1>
                <h1>Play padel today</h1>
            </div>
            <div className="imgContainer">
                <img src='assets/images/racket2.png' alt="" />
            </div>
            <div className="textContainer">
                
                <p>With Palaplay you can find new padel tennis games, buddies, courts, events and much more!</p>
                <Link to={'/games'}>
                    <button>Search games</button>
                </Link>
            </div>
        </div>
    )
}

export default HomeBanner;