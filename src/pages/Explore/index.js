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

import { colors } from "../../libs/utils";
import * as T from "./index.style";
import { getPokemons, getPokemonByName } from "../../api";

import PokeAPI from "pokedex-promise-v2";
const P = new PokeAPI();

const Explore = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [pokemonSpecies, setPokemonSpecies] = useState([]);
  const [pokemonGeneration, setPokemonGeneration] = useState([]);
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

  const getPokemonSpecies = async (pokemonName) => {
    try {
      const pokemonSpecies = await P.getPokemonSpeciesByName(pokemonName);
      setPokemonSpecies(pokemonSpecies);

      const generation = await getPokemonGeneration(
        pokemonSpecies.generation?.name
      );
      setPokemonGeneration(generation);

      console.log(selectedPokemon);
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonGeneration = async (pokemonGeneration) => {
    try {
      const generation = await P.getGenerationByName(pokemonGeneration);
      return generation;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Modal open={pokemonModal} overlay="light">
        <T.PokemonInfoModal>
          <T.InfoName>
            <Text variant="outlined" size="lg">
              Number: #{selectedPokemon.order}
            </Text>
            <Text variant="outlined" size="xl">
              {selectedPokemon.name}
            </Text>
          </T.InfoName>
          <T.InfoImage>
            <LazyLoadImage
              className="image"
              src={`https://img.pokemondb.net/sprites/go/normal/${selectedPokemon.name}.png`}
              width={256}
              alt={selectedPokemon.name}
            />
            <Text
              variant="outlined"
              style={{
                textTransfrom: "uppercase",
                color: `${colors[pokemonSpecies.color?.name + "-300"]}`,
              }}
            >
              Color: {pokemonSpecies.color?.name}
            </Text>
            <Text variant="outlined">
              Region of Origin: "{pokemonGeneration.main_region?.name}"
            </Text>
            <Text variant="outlined">Pokemon Type:</Text>
            <T.InfoType>
              {selectedPokemon.types?.map((types, index) => (
                <TypeBadge key={index} type={types.type.name} />
              ))}
            </T.InfoType>
            <T.InfoDescription>
              <Text variant="outlined">
                Habitat: {pokemonSpecies.habitat?.name.replace("-", " ")}
              </Text>
              <T.InfoWeightHeight>
                <Text variant="outlined">
                  Height: {selectedPokemon.height / 10}m
                </Text>
                <Text variant="outlined">
                  Weight: {selectedPokemon.weight / 10}kg
                </Text>
              </T.InfoWeightHeight>
              <T.InfoStats>
                {selectedPokemon.stats?.map((stats, index) => (
                  <div key={index} style={{ marginTop: "5px" }}>
                    <label for="stats">
                      {stats.stat.name
                        .replace("-", " ")
                        .replace("special", "sp")}
                      :
                    </label>
                    <progress
                      style={{ backgroundColor: `${colors["sky-200"]}` }}
                      id="stats"
                      value={stats.base_stat}
                      max="100"
                    ></progress>
                  </div>
                ))}
              </T.InfoStats>
            </T.InfoDescription>
            <T.InfoBackButton>
              <Button size="base" onClick={() => setPokemonModal(false)}>
                Back
              </Button>
            </T.InfoBackButton>
          </T.InfoImage>
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
                          getPokemonSpecies(pokemon.name);
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
        <Loading />
      )}
    </>
  );
};

export default Explore;
