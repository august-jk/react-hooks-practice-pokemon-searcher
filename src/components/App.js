import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemonCollection, setPokemonCollection] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(data => setPokemonCollection(data))
  }, [])
  function handleSearch(searchTerm) {
    setSearch(searchTerm)
  }
  function handleAddPokemon(newPokemon) {
    setPokemonCollection([...pokemonCollection, newPokemon])
    console.log(newPokemon)
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "id": parseInt(pokemonCollection.length + 1),
        "name": newPokemon.name,
        "hp": parseInt(newPokemon.hp),
        "sprites": {"front": newPokemon.sprites.front, "back": newPokemon.sprites.back}
      })
    })
    .then(r => r.json())
    .then(data => console.log(data))
    
  }
  const filteredPokemonCollection = pokemonCollection.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="App">
      <PokemonPage pokemonCollection={filteredPokemonCollection} handleSearch={handleSearch} onAddPokemon={handleAddPokemon} />
    </div>
  );
}

export default App;
