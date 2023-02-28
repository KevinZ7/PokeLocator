const Pokedex = require("pokeapi-js-wrapper");
const pokedexConfig = {
  protocol: "https",
  hostName: "localhost:3000",
  versionPath: "/api/v2/",
  cache: true,
  timeout: 5 * 1000, // 5s
  cacheImages: true
}
const myPokedex = new Pokedex.Pokedex(pokedexConfig);


export {myPokedex};