import React from "react";

import "./card.css";

export default function PokemonCard({pokemon}) {
    console.log (pokemon);
    return (
        <div>
            <h1>Liste des Pokémon</h1>
            <img src={pokemon.sprite}/>
            <div>
                <h4>{pokemon.name}</h4>
                <p class>{pokemon.apiTypes}</p>
                <p>{pokemon.stats}</p>
            </div>
        </div>
    )
}