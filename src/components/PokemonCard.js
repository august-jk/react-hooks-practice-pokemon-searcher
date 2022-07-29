import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [front, setFront] = useState(true)
  function handleSprites() {
    setFront(current => !current)
  }
  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={front ? pokemon.sprites.front : pokemon.sprites.back} onClick={handleSprites}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
