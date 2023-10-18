import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { PokemonContext } from './PokemonContext';

const FirstPage = () => {
  const { pokemons, setPokemons } = useContext(PokemonContext);

  useEffect(() => {
    if (pokemons.length === 0) {
      axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')
        .then(response => {
          const data = response.data.results.map(pokemon => pokemon.name);
          setPokemons(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [pokemons, setPokemons]);
  

  return (
    <div>
      <h1>Pokemon List 1</h1>
      <ul>
        {pokemons.slice(0, 10).map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default FirstPage;
