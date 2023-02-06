import PokeAPI from "pokedex-promise-v2";
const P = new PokeAPI();

const getPokemonGeneration = async (generationName) => {
  try {
    const generation = await P.getGenerationByName(generationName);
    return generation;
  } catch (error) {
    console.log(error);
  }
};

export default getPokemonGeneration;
