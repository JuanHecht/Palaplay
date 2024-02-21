import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MapView from "../components/MapView";

const API_URL = "https://json-server-palaplay.onrender.com/gameCards";

function GameInfo() {

    const [game, setGame] = useState([]);
    const [newPlayerName, setNewPlayerName] = useState("");
    const { gameId } = useParams();
    // We were loading empty information as first so implemented this solution
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API_URL}/${gameId}`)
            .then(response => {
                setGame(response.data);
                setIsLoading(false)
            })
            .catch(error => {
                console.error('Error fetching game:', error);
            });

    }, []);

    const players = game.players;

    const handleAddPlayer = () => {
        if (newPlayerName.trim() !== "") {
            let updatedPlayers;
            const indexOfEmpty = players.findIndex(player => player === "");
            if (indexOfEmpty !== -1) {
                updatedPlayers = [...players];
                updatedPlayers[indexOfEmpty] = newPlayerName;
            } else {
                updatedPlayers = [...players, newPlayerName];
            }
            axios.put(`${API_URL}/${gameId}`, { players: updatedPlayers })
                .then(response => {
                    setGame(prevState => ({
                        ...prevState,
                        players: updatedPlayers
                    }));
                })
                .catch(error => {
                    console.error('Error updating game:', error);
                });
            setNewPlayerName("");
        }
    };
    if (isLoading) return (<p>loading</p>);

    return (
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
            <div className="add-player">
                <h2>Type your name to join the game</h2>
                {players.length < 4 ? (
                    <>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={newPlayerName}
                            onChange={(e) => setNewPlayerName(e.target.value)}
                        />
                        <button onClick={handleAddPlayer}>Join game</button>
                    </>
                ) : (
                    <p>The game is full, you cannot join anymore.</p>
                )}
            </div>
            <MapView game={game} height='400px' width='400px' zoom='10'/>
        </div>
    )
}

export default GameInfo;


