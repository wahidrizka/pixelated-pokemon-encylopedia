import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Text, Button, Loading, PokemonCard } from "../../components";

import * as T from "./index.style";
import getPokemons from "../../api/getPokemons";

const Explore = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setPokemons(await getPokemons(1));
      console.log(pokemons);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <T.Container style={{}}>
        <Text as="h1" variant="outlined" size="xl">
          POKÉMON ENCYCLOPEDIA
        </Text>
        <T.Grid>
          {pokemons.length &&
            pokemons.map((pokemon) => (
              <T.WrapperCardList key={pokemon.name}>
                <PokemonCard
                  name={pokemon.name}
                  sprite={`https://img.pokemondb.net/sprites/go/normal/${pokemon.name}.png`}
                />
              </T.WrapperCardList>
            ))}
        </T.Grid>
      </T.Container>
    </>
  );
};

export default Explore;
