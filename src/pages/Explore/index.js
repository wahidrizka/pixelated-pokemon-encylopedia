import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  Text,
  Button,
  Loading,
  PokemonCard,
  TypeBadge,
  InfoButton,
  Modal,
} from "../../components";

import * as T from "./index.style";
import { getPokemons, getPokemonByName } from "../../api";

const Explore = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [pokemonModal, setPokemonModal] = useState(false);

  const pokemonsPerPage = 10;

  const loadPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(pokemonsPerPage, pokemonsPerPage * page);
      const results = await getPokemonByName(data);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / pokemonsPerPage));
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
      <Modal open={pokemonModal} overlay="light">
        <T.PokemonInfoModal>
          <div className="pxl-border">
            <Text size="xl" variant="gray">
              #{selectedPokemon.order}
            </Text>
            <Text size="xl" variant="outlined">
              {selectedPokemon.name}
            </Text>
            <LazyLoadImage
              src={`https://img.pokemondb.net/sprites/go/normal/${selectedPokemon.name}.png`}
              alt={selectedPokemon.name}
              height={256}
            />
          </div>
          <div>
            <Button onClick={() => setPokemonModal(false)}>Back</Button>
          </div>
        </T.PokemonInfoModal>
      </Modal>
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
                <>
                  <T.WrapperCardList key={pokemons.name}>
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
                        key={pokemon.order}
                        onClick={() => {
                          setSelectedPokemon(pokemon);
                          setPokemonModal(true);
                          console.log(pokemon);
                        }}
                      />
                    </PokemonCard>
                  </T.WrapperCardList>
                </>
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
