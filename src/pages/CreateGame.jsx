import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3001/gameCards";

function NewGameForm() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    time: "",
    level: "",
    players: [""] 
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePlayerChange = (index, value) => {
    const newPlayers = [...formData.players];
    newPlayers[index] = value;
    setFormData({ ...formData, players: newPlayers });
  };

  const addPlayerField = () => {
    if (formData.players.length < 4) {
      setFormData({ ...formData, players: [...formData.players, ""] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(API_URL, formData)
      .then((response) => {
        navigate("/")
      })
      .catch((error) => {
        console.error("Error creating game:", error);
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
      <button type="submit">Create Game</button>
    </form>
  );
}

export default NewGameForm;
