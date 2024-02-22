import axios from "axios";
import { useState, useEffect } from "react";
import GameCard from '../components/GameCard';
import { Link } from "react-router-dom";
import './AllGames.css'

const API_URL = "https://json-server-palaplay.onrender.com/gameCards"; 

function AllGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setGames(response.data);
      })
      .catch(error => {
        console.error('Error fetching expenses:', error);
      });
  }, []); 

  return (
    <section className="">
      <div className="allGamesHeading">
        <h1>Browse through the existing games</h1>
        <div className="createNewGame">
          <p>Or create your own game and invite your friends</p>
          <Link to="/createGame">
            <button>Create new game</button>
          </Link>
        </div>    
      </div>
      <div className="">
        {games.map(game => (
          <GameCard key={game.id} game={game}  />
        ))}
      </div>
      <Link to="/createGame">
            <button>Create new game</button>
      </Link>
    </section>
  );
}

export default AllGames;
