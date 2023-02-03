import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Text,
  Button,
  Loading,
  PokemonCard,
  TypeBadge,
  InfoButton,
} from "../../components";

import * as T from "./index.style";
import { getPokemons, getPokemonByName } from "../../api";

const Explore = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState(false);

  const pokemonsPerPage = 10;

  const loadPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(pokemonsPerPage, pokemonsPerPage * page);
      const results = await getPokemonByName(data);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / pokemonsPerPage));
      console.log(data.count);
    } catch (error) {
      console.log(error);
    }
  };

  const leftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const rightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    loadPokemons();
  }, [page]);

  return (
    <>
      {!loading ? (
        pokemons && (
          <T.Container>
            <Text variant="outlined" size="lg">
              POKÉMON ENCYCLOPEDIA
            </Text>
            <T.Pagination>
              <Button variant="dark" size="sm" onClick={leftClickHandler}>
                ◀
              </Button>
              <div style={{ marginTop: "0.7rem" }}>
                <Text variant="gray" outlined size="lg">
                  {page + 1} / {totalPages}
                </Text>
              </div>
              <Button variant="dark" size="sm" onClick={rightClickHandler}>
                ▶
              </Button>
            </T.Pagination>
            <T.Grid>
              {pokemons.map((pokemon) => (
                <T.WrapperCardList key={pokemon.name}>
                  <PokemonCard
                    name={pokemon.name}
                    // sprite={`https://img.pokemondb.net/sprites/go/normal/${pokemon.name}.png`}
                    sprite={`https://img.pokemondb.net/sprites/go/normal/${pokemon.name}.png`}
                  >
                    <T.TypeContainer>
                      {pokemon.types.map((type, index) => (
                        <TypeBadge key={index} type={type.type.name} />
                      ))}
                    </T.TypeContainer>
                    <InfoButton
                      onClick={() => {
                        setSelectedPokemon(pokemons);
                        setPokemonInfo(true);
                      }}
                    />
                  </PokemonCard>
                </T.WrapperCardList>
              ))}
            </T.Grid>
          </T.Container>
        )
      ) : (
        <Loading label="Please wait..." />
      )}
    </>
  );
};

export default Explore;
