import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Clubs.css';

const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await axios.get('https://api.cartola.globo.com/clubes');
        setClubs(Object.values(response.data));
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchClubs();
  }, []);

  return (
    <div className="club-list">
      {clubs.map((club) => (
        <div key={club.id} className="club-card">
          <img src={club.escudos['60x60']} alt={`${club.nome} escudo`} />
          <h2>{club.nome}</h2>
          <p>{club.apelido}</p>
        </div>
      ))}
    </div>
  );
};

export default Clubs;
