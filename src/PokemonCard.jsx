import React from "react";

export default function PokemonCard({ pokemon }) {
  return (
    <div class="card">
      <h1>Liste des Pokémon</h1>
      <img src={pokemon.sprite} />
      <div>
        <h4>{pokemon.name}</h4>
        <div class="flex-species">
          {pokemon.apiTypes.map((apiType) => (
            <div class="no-space">
              <img src={apiType.image} alt="" width="10" height="10" />
              <p>{apiType.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
