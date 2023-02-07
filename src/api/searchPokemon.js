import PokeAPI from "pokedex-promise-v2";
const P = new PokeAPI();

const searchPokemon = async (pokemon) => {
  try {
    const response = P.getPokemonByName(pokemon);
    return await response;
  } catch (error) {
    console.log(error);
  }
};

export default searchPokemon;
