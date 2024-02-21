import HomeBanner from "../components/HomeBanner";
import GamesWithFriends from "../components/GamesWithFriends";
import GamesByLevel from "../components/GamesByLevel";
import './Homepage.css'
function Homepage(){
    return(
        <div className="mainHomePage">
            <HomeBanner />
            <div className="gameRecommendations">
                <div className='friends'>
                    <GamesWithFriends />
                </div>
                <div className='level'>
                    <GamesByLevel />
                </div>
            </div>
        </div>
    )
}

export default Homepage;