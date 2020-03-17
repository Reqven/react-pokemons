import React, { Component } from 'react'
import PokemonDetails from '../components/PokemonDetails'

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.name,
      pokemon: undefined
    };
  }

  componentDidMount () {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
      .then(response => response.json())
      .then(data => {
        this.state.pokemon = data;
        this.setState(this.state);
      });
  }

  render() {
    const { pokemon } = this.state;

    return (
      <div className="Pokemon">
        <h1>{this.state.name}</h1>
        { !pokemon
            ? <p>Loading..</p>
            : <PokemonDetails pokemon={pokemon} />
        }
      </div>
    );
  }
}

export default Pokemon;
