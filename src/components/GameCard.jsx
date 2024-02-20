import { Link } from "react-router-dom";
import './GameCard.css'
import MapView from "./MapView";

function GameCard(props){
    const {game} = props;

        return (
          <Link to={`game/${game.id}`} key={game.id}>
            <div className="card" key={game.id}>
              <div className='gameDetails'>
                  <div>
                    <h3>Title: {game.title}</h3>
                    <p>Date: {game.date}</p>
                    <p>Time: {game.time}</p>  
                  </div>
                
              </div>
              <div className="playersContainer">
              <p>Players: {game.players}</p>
              </div>
              <div className="mapContainer">
                <p>Location: {game.location}</p>
                <MapView  game={game} height='200px' width='200px' zoom='9'/>
              </div>
            </div>
          </Link> 
        );
}


export default GameCard;