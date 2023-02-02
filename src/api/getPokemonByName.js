import PokeAPI from "pokedex-promise-v2";
const P = new PokeAPI();

const getPokemonByName = async (pokemonData) => {
  const promises = pokemonData.results.map((pokemon) => {
    return P.getPokemonByName(pokemon.name);
  });

  const results = await Promise.all(promises);
  return results;
};

export default getPokemonByName;
