import { Link } from "react-router-dom";
import './GameCard.css'

function GameCard(props){
    const {game} = props;

        return (
          <div className="card" key={game.id}>
           {/*  <div  className="imgContainer">
              <img className="cardImg" src={assignImage(game.category)} alt={game.category} />
            </div> */}
            <div className='cardInfo'>
              <Link to={`game/${game.id}`} key={game.id}>
                <div>
                  <h3>Title: {game.title}</h3>
                  <p>Date: {game.date}</p>
                  <p>Time: {game.time}</p>
                  <p>Location: {game.location}</p>
                  <p>Players: {game.players}</p>
                </div>
              </Link>
            </div>
          </div>
        );
}


export default GameCard