/* import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:3001/gameCards";

function EditGame() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    time: "",
    level: "",
    players: [""] 
  });
  const navigate = useNavigate();
  const {gameId} = useParams();

  useEffect(()=>{
    axios
    .get(`${API_URL}{gameId}`)
    .then((response)=>{
        setFormData(response.data);
    })
  })

// Function to handle the cgange of each field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

//   Function to change info of players
  const handlePlayerChange = (index, value) => {
    const newPlayers = [...formData.players];
    newPlayers[index] = value;
    setFormData({ ...formData, players: newPlayers });
  };

//    Add a player input field
  const addPlayerField = () => {
    if (formData.players.length < 4) {
      setFormData({ ...formData, players: [...formData.players, ""] });
    }
  };

//   Function that sends the info when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API_URL}{gameId}`, formData)
      .then((response) => {
        navigate(`/my games/${gameId}`)
      })
      .catch((error) => {
        console.error("Error editing game:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Level:</label>
        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
          required
        >
          <option value="">Select level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div>
        <label>Players:</label>
        {formData.players.map((player, index) => (
          <input
            key={index}
            type="text"
            value={player}
            onChange={(e) => handlePlayerChange(index, e.target.value)}
            required={index === 0} // Only the first player is required
            placeholder={index === 0  ? 'Your username' : 'Your friends username'}
          />
        ))}
        <button type="button" onClick={addPlayerField}>Add Player</button>
      </div>
      <button type="submit">Edit game</button>
    </form>
  );
}

export default EditGame;
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:3001/gameCards";

function EditGame() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    time: "",
    level: "",
    players: [""] 
  });
  const navigate = useNavigate();
  const {gameId} = useParams();

  useEffect(()=>{
    axios
    .get(`${API_URL}/${gameId}`)
    .then((response)=>{
        setFormData(response.data);
    })
  }, [gameId]);

  // Function to handle the change of each field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to change info of players
  const handlePlayerChange = (index, value) => {
    const newPlayers = [...formData.players];
    newPlayers[index] = value;
    setFormData({ ...formData, players: newPlayers });
  };

  // Add a player input field
  const addPlayerField = () => {
    if (formData.players.length < 4) {
      setFormData({ ...formData, players: [...formData.players, ""] });
    }
  };

  // Function that sends the info when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API_URL}/${gameId}`, formData)
      .then((response) => {
        navigate(`/my games`)
      })
      .catch((error) => {
        console.error("Error editing game:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Level:</label>
        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
          required
        >
          <option value="">Select level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div>
        <label>Players:</label>
        {formData.players.map((player, index) => (
          <input
            key={index}
            type="text"
            value={player}
            onChange={(e) => handlePlayerChange(index, e.target.value)}
            required={index === 0} // Only the first player is required
            placeholder={index === 0  ? 'Your username' : 'Your friends username'}
          />
        ))}
        <button type="button" onClick={addPlayerField}>Add Player</button>
      </div>
      <button type="submit">Edit game</button>
    </form>
  );
}

export default EditGame;
