import PokeAPI from "pokedex-promise-v2";
const P = new PokeAPI();

const getPokemons = async (page) => {
  const offset = 9 * (page - 1);
  const data = await P.getPokemonsList({ limit: 9, offset: offset });
  const promises = data.results.map(async (pokemon) => {
    return await P.getResource(pokemon.url);
  });

  const results = await Promise.all(promises);
  return results;
};

export default getPokemons;
