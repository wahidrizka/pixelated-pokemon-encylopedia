import PokeAPI from "pokedex-promise-v2";
const P = new PokeAPI();

const getPokemonByName = async (pokemonData, pokemonName) => {
  let promises;
  let results;
  if (pokemonData) {
    promises = pokemonData.results.map((pokemon) => {
      return P.getPokemonByName(pokemon.name);
    });
    results = await Promise.all(promises);
  } else {
    results = await P.getPokemonByName(pokemonName);
  }

  return results;
};

export default getPokemonByName;
