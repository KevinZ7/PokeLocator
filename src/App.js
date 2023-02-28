import './App.css';
import { Component } from 'react';
import Main from './components/main/Main.component';

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
        <Main>

        </Main>
      </div>
    );
  }
}


export default App;
