import PokeAPI from "pokedex-promise-v2";
const P = new PokeAPI();

const getPokemons = async (limit = 10, offset = 0) => {
  const data = await P.getPokemonsList({
    limit: limit,
    offset: offset,
  });

  return data;
};

export default getPokemons;
