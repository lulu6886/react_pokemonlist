import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        axios.get('https://pokebuildapi.fr/api/v1/pokemon')
            .then(response => {
                setPokemons(response.data)
            })
            .catch(error => {
                setError("Erreur de la récup de la data");
                console.error(error);
            });
    }, []);
 
    return (
        <div>
            {error && <p style={{color:'red'}}>{error}</p>}
        <h1>Liste des Pokémon</h1>
        <div>
            {pokemons.map(pokemon => (
                <PokemonCard pokemon={pokemon}/>
            ))}
        </div>     
        </div>
    );
};
 
export default PokemonList;