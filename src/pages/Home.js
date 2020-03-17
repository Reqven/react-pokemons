import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: [] };
  }

  componentDidMount () {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(data => {
        this.state.pokemons = data.results;
        this.setState(this.state);
      });
  }

  render() {
    return (
      <div className="Home">
        <h1>Pokémons</h1>
          <ul style={{ display: 'contents' }}>
            {
              this.state.pokemons.map((a, i) => {
                return <li key={i}><Link key={i} to={`/pokemon/${a.name}`}>{a.name}</Link></li>
              })
            }
          </ul>
      </div>
    );
  }
}

export default Home;
