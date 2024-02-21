import React, { useState, useEffect } from "react";
import axios from "axios";
import './GamesByLevel.css'

const API_URL = "https://json-server-palaplay.onrender.com/gameCards"; 

function GamesByLevel(){
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState("Beginner");

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setGames(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    useEffect(() => {
        // Filter games based on selected level
        const filtered = games.filter(game => game.level === selectedLevel);
        setFilteredGames(filtered);
    }, [games, selectedLevel]);

    return (
        <div className="levelBanner">
            <div className="titleContainer">
                <h3>Games by level:</h3>
                <select value={selectedLevel} onChange={e => setSelectedLevel(e.target.value)}>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </div>
            
                {filteredGames.slice(0, 3).map(game => (
                    <div key={game.title} className="levelGameCard">
                        <h4>Game: {game.title}</h4>
                        <p>Players: {game.players}</p>
                        <p>Playing on the: {game.date}</p>
                        <p>Playing in: {game.location}</p>
                    </div>
                ))}
            
        </div>
    );
}

export default GamesByLevel;
