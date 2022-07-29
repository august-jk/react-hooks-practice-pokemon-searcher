import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [newPokemon, setNewPokemon] = useState({
    name: '',
    hp: '',
    front: '',
    back: ''
  })
  function createNewPokemon() {
    const pokemon = {
      name: newPokemon.name,
      hp: newPokemon.hp, 
      sprites: {front: newPokemon.front, back: newPokemon.back}
    }
    onAddPokemon(pokemon)
    setNewPokemon({
      name: '',
      hp: '',
      front: '',
      back: ''
    })
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          createNewPokemon()
          console.log("submitting form...");
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={e => setNewPokemon({
            name: e.target.value,
            hp: newPokemon.hp,
            front: newPokemon.front,
            back: newPokemon.back
            })}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={e => setNewPokemon({
            name: newPokemon.name,
            hp: e.target.value,
            front: newPokemon.front,
            back: newPokemon.back
            })}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={e => setNewPokemon({
              name: newPokemon.name,
              hp: newPokemon.hp,
              front: e.target.value,
              back: newPokemon.back
              })}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={e => setNewPokemon({
              name: newPokemon.name,
              hp: newPokemon.hp,
              front: newPokemon.front,
              back: e.target.value
              })}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
