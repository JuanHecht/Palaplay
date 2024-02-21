import './HomeBanner.css'

function HomeBanner(){
    return(
        <div className='main'>
            <div className="imgContainer">
                <img src='src/assets/images/banner_img.webp' alt="" />
            </div>
            <div className="textContainer">
                <h1>Get started playing padel today!</h1>
                <p>With Palaplay you can find new padel tennis games, buddies, courts, events and much more!</p>
                <button>Search games</button>
            </div>
        </div>
    )
}

export default HomeBanner;