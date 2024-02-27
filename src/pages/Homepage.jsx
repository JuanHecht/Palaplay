import HomeBanner from "../components/HomeBanner";
import GamesWithFriends from "../components/GamesWithFriends";
import GamesByLevel from "../components/GamesByLevel";
import './Homepage.css'
function Homepage(){
    return(
        <div className="mainHomePage">
            <HomeBanner />
            <div className="gamesByLevel">
                <div className="gamesImg">
                    <h1>Browse games by level of difficulty</h1>
                    <img src="/assets/images/createpadel.jpg" alt="" />
                </div>
                <div className='level'>
                    <GamesByLevel />
                </div>
            </div>
            <div className="gamesByFriends">
            <div className="gamesImg-hidden">
                <h1>Look where your friends are playing</h1>
            </div>
                <div className='friends'>
                    <GamesWithFriends />
                </div>
                <div className="gamesImg">
                    <h1 className="gamesWithFriendsTitle">Look where your friends are playing</h1>
                    <img src="/assets/images/padelFriends.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Homepage;