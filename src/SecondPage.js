import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { PokemonContext } from './PokemonContext';

const SecondPage = () => {
  const { pokemons, setPokemons } = useContext(PokemonContext);

  useEffect(() => {
    if (pokemons.length < 20) {
      axios.get('https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10')
        .then(response => {
          const data = response.data.results.map(pokemon => pokemon.name);
          setPokemons(prevPokemons => [...prevPokemons, ...data]);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [pokemons, setPokemons]);

  return (
    <div>
      <h1>Pokemon List 2</h1>
      <ul>
        {pokemons.slice(10, 20).map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default SecondPage;
