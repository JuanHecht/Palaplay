import axios from "axios";
import { useState, useEffect } from "react";
import GameCard from '../components/GameCard';
import { Link } from "react-router-dom";

const API_URL = "http://localhost:3001/gameCards"; 

function HomePage() {
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

export default HomePage;
