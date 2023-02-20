import './App.css';
import { Component } from 'react';
const pokedex = require('pokeapi-js-wrapper');
const myPokedex = new pokedex.Pokedex();

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [
        {
          name:'pikachu',
          location:'richmond'
        },
        {
          name:'Squirtle',
          location:'Vancouver'
        },
        {
          name:'Chimchar',
          location:'Coquitlam'
        },
        {
          name:'Ditto',
          location:'Surrey'
        }
      ],
    }
  }

  async componentDidMount() {
    try {
      const response = await myPokedex.getPokemonsList();

      console.log(response);
      
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return(
      <div className='App'>
        {this.state.pokemons.map((pokemon) =>{
          return(
            <div className='pokemon' key={pokemon.name}>
              <h1>{pokemon.name}</h1>
              <h2>{pokemon.location}</h2>
            </div>
          )
        })}
      </div>
    );
  }
}


export default App;
