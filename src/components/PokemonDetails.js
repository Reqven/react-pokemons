import React, { Component } from 'react'

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pokemon } = this.props;
    console.log(pokemon);

    return (
      <div className="PokemonDetails">
        <img src={pokemon.sprites.front_default}/>
      </div>
    );
  }
}

export default PokemonDetails;
