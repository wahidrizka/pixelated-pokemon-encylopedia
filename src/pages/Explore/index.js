import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Text,
  Button,
  Loading,
  PokemonCard,
  TypeBadge,
} from "../../components";

import * as T from "./index.style";
import getPokemons from "../../api/getPokemons";

import PokeAPI from "pokedex-promise-v2";
const P = new PokeAPI();

const Explore = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

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
          POKÉMON ENCYCLOPEDIA
        </Text>
        <T.Grid>
          {pokemons.map((pokemon) => (
            <T.WrapperCardList key={pokemon.name}>
              <PokemonCard
                id={pokemon.order}
                name={pokemon.name}
                // sprite={`https://img.pokemondb.net/sprites/go/normal/${pokemon.name}.png`}
                sprite={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${pokemon.name}.gif`}
              >
                <T.TypeContainer>
                  {pokemon.types.map((type, index) => (
                    <TypeBadge key={index} type={type.type.name} />
                  ))}
                </T.TypeContainer>
              </PokemonCard>
            </T.WrapperCardList>
          ))}
        </T.Grid>
        {!loading ? (
          pokemons && (
            <>
              <h1>Pagination ini ntar</h1>
            </>
          )
        ) : (
          <Loading label="Please wait..." />
        )}
      </T.Container>
    </>
  );
};

export default Explore;
