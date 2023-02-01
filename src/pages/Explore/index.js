import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Text, Button, Loading, PokemonCard } from "../../components";

import * as T from "./index.style";
import getPokemons from "../../api/getPokemons";

import PokeAPI from "pokedex-promise-v2";
const P = new PokeAPI();

const Explore = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState([]);

  async function loadPokemons() {
    try {
      setLoading(true);
      setPokemons(await getPokemons(1));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <>
      <T.Container style={{}}>
        <Text as="h1" variant="outlined" size="xl">
          POKÉMON ENCYCLOPEDI
        </Text>
        <T.Grid>
          {pokemons.length &&
            pokemons.map((pokemon) => (
              <T.WrapperCardList key={pokemon.name}>
                <PokemonCard
                  id={pokemon.order}
                  name={pokemon.name}
                  types={types}
                  sprite={`https://img.pokemondb.net/sprites/go/normal/${pokemon.name}.png`}
                >
                  {pokemon.types.map((type, index) => (
                    <div key={index}>
                      <Text variant="outlined">{type.type.name}</Text>
                    </div>
                  ))}
                </PokemonCard>
              </T.WrapperCardList>
            ))}
        </T.Grid>
      </T.Container>
    </>
  );
};

export default Explore;
