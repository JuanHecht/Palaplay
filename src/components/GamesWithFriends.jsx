import React, { useEffect, useState } from 'react';
import friendsData from '../data/friends.json'; 
import axios from 'axios';
import './GamesWithFriends.css'

const API_URL = "https://json-server-palaplay.onrender.com/gameCards"; 

function GamesWithFriends(){

    const [filteredGames, setFilteredGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(API_URL)
        .then(response => {
            
            const games = response.data;
            const gamesWithFriends = games.filter(game => {
                return game.players.some(player => friendsData.friends.some(friend => friend.name === player));
            });
            setFilteredGames(gamesWithFriends);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Error fetching expenses:', error);
        });
    }, []);

    if (isLoading) return (<p>Loading...</p>);

    return(
        <div className='friendsBanner'>
            <div className='titleContainer'>
                <h3>Games where your friends are playing</h3>
            </div>
            {filteredGames.slice(0, 3).map(game => (
                <div key={game.id} className='friendsGameCard'>
                    <h4>Game: {game.title}</h4>
                    <p>Friends playing: {game.players.filter(player => friendsData.friends
                        .find(friend => friend.name === player)).map(player => <span key={player}>{player}, </span>)}</p>
                    <p>Playing on the: {game.date}</p>
                    <p>Playing in: {game.location}</p>
                </div>
            ))}
        </div>
    )
}

export default GamesWithFriends;
