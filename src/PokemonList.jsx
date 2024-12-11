import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState(null); 

    useEffect(() => {
        console.log('composant monté');
        axios.get('https://tyradex.vercel.app/api/v1/pokemon')
            .then(response => {
                setPokemons(response.data) //Mise à jour de l'état
            })
            .catch(error => {
                setError('Erreur lors de la récupération des pokémon') //gestion des erreurs
                console.error(error);
            });
    }, []);

    return (
        <div>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <h1>Liste des Pokémon</h1>
            <ul>
                {pokemons.map(pokemons => (
                    <li key={pokemons.id}>{pokemons.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList


