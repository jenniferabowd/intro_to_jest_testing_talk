import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonArray: [],
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    const xhrRequest = new XMLHttpRequest();
    xhrRequest.open('GET', 'http://pokeapi.co/api/v2/pokemon/');
    xhrRequest.send();
    xhrRequest.onreadystatechange = () => {
      let data;
        if (xhrRequest.readyState === 4 && xhrRequest.status === 200) {
          data = JSON.parse(xhrRequest.responseText);
          this.setState({ pokemonArray: data.results });
        }
    }
  }

  createPokemonElements() {
      return (
      <div className='pokemonNames'>
          <ul>
              {this.state.pokemonArray.map((pokemon, i) => {
                return <li key={i}>{pokemon.name}</li>
              })}
          </ul>
        </div>
        );
    };

  render() {
    return (
        <div className="pokeList">
          <h3>Pokemon</h3>
          { this.createPokemonElements() }
        </div>
      );
  }
}

export default App;
