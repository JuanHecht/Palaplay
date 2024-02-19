import React, { useState } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:3001/gameCards"; 

function MyGames() {
  const [searchName, setSearchName] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  const searchGames = () => {
    axios.get(API_URL)
      .then(response => {
        const filtered = response.data.filter(game =>
          game.players[0] === searchName
        );
        setFilteredGames(filtered);
        setError(null);
      })
      .catch((error)=>console.log(error))
  };

  function removeItem(id) {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setFilteredGames(prevGames => prevGames.filter(game => game.id !== id));
      })
      .catch((error)=>console.log(error))
  }

  return (
    <div>
        <div>
            <h1>Type your username</h1>
            <input
                type="text"
                value={searchName}
                onChange={handleSearchChange}
                placeholder="Enter your name"
            />
            <button onClick={searchGames}>Search</button>
        </div>

      <div className="">
        {filteredGames.map(game => (
          <div key={game.id}>
            <GameCard game={game} />
            <div>
                <Link to={`/editgame/${game.id}`}>
                    <button>Edit Game</button>
                </Link>
                <button onClick={() => removeItem(game.id)}>Delete Game</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyGames;