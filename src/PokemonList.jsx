import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('composant monté');
        //Placez ici la logique pour récupérer les Pokémon
    }, []);

    useEffect(() => {
        axios.get('https://tyradex.vercel.app/api/v1/pokemon')
            .then(response => {
                console.log (response.data); //vérifier les données dans la console
            })

            setPokemons(response.data) //Mise à jour de l'état

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
        </div>,

        <pre>{JSON.stringify(pokemons,null, 2)}</pre>
    )
};

export default PokemonList


