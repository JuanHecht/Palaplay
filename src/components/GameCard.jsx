import { Link } from "react-router-dom";
import './GameCard.css'
import MapView from "./MapView";

function GameCard(props){
    const {game} = props;
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

        return (
          <Link to={`game/${game.id}`} key={game.id}>
            <div className="card" key={game.id}>
              <div className='gameDetails'>
                  <div>
                    <h3>Game: {game.title}</h3>
                    <p>Date: {game.date}</p>
                    <p>Time: {game.time}</p>  
                  </div>
                
              </div>
              <div className="playersContainer">
                <h3>Players</h3>
                {game.players.map((player, index) => (

                      <div key={index}>
                        <p>{`Player ${index + 1}: ${player}`}</p>
                      </div>
                  ))}
              </div>
              <div className="mapContainer">
                <h3>Location</h3>
                <p>{game.location}</p>
                {/* <MapView  game={game} height='200px' width='200px' zoom='9'/> */}
                {isSmallScreen ? (
                  <MapView game={game} height='100px' width='100px' zoom='7' />
                ) : (
                  <MapView game={game} height='200px' width='200px' zoom='9' />
                )}
              </div>
            </div>
          </Link> 
        );
}


export default GameCard;