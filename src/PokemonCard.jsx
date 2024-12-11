import React, {useState,useEffect,} from "react"
import axios from 'axios'


const PokemonCard = () => {
const [pokemons,setPokemons] = useState([]);
useEffect(() => {
    console.log('composant monté');
    axios.get('https://pokebuildapi.fr/api/v1/pokemon')
        .then(response => {
            setPokemons(response.data) //Mise à jour de l'état
        })
}, []);
return (
    <div>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <ul>
            <div>
            {pokemons.map(pokemons => (
                <li key={pokemons.id}>{pokemons.name} <img src={pokemons.sprite}/></li>
            ))}
            </div>
            
        </ul>
    </div>
);
};
export default PokemonCard