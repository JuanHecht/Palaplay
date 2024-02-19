import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:3001/gameCards"; 

function GameInfo(){
    
    const [game, setGame] = useState({});
    const { gameId } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`${API_URL}/${gameId}`)
        .then(response => {
            setGame(response.data);
        })
        .catch(error => {
            console.error('Error fetching game:', error);
        });
    }, [gameId]); 

    const players = game.players || [];

    return  (
        <div>
            <div><h1>{game.title}</h1></div>
            <div className="players">
                <h2>Players</h2>
                {players.map((player, index) => (
                    <p key={index}>{`Player ${index + 1}: ${player}`}</p>
                ))}
            </div>
            <div className="info">
                <h2>Info</h2>
                <p>This game will be played the {game.date} at {game.time}</p>
                <p>The level of the match is {game.level}</p>
                <p>Location: {game.location}</p>
            </div>

        </div>
    )
}

export default GameInfo;
