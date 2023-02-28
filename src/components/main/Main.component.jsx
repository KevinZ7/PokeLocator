import React, { Component } from 'react'
import videoBg from '../../assets/videos/video_bg.mp4'
import styles from './Main.module.css'
import { myPokedex } from '../../utils/wrappers';
export default class Main extends Component {

  constructor(props) {
    super();
    this.state = {
      pokemons: []
    }
  }

  async componentDidMount() {
    const pokemons = await myPokedex.getPokemonsList();
    this.setState({ pokemons });
  }

  render() {
    console.log(this.state.pokemons)
    return (
      <div className={styles.main}>
        <video className={styles.bgVideo} src={videoBg} autoPlay loop muted/>
        <div className={styles.overlay}></div>
        <div className={styles.title}>
          <img src={require('../../assets/images/pokemon_icon.png')} alt="logo" className={styles.logo}/>
          PokeLocator
        </div>

        <div>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
            alt="Pikachu"
          />
        </div>
      </div>
    )
  }
}
