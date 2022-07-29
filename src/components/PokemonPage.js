import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ pokemonCollection, handleSearch, onAddPokemon }) {
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={onAddPokemon}/>
      <br />
      <Search handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemonCollection={pokemonCollection}/>
    </Container>
  );
}

export default PokemonPage;
