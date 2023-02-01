import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "@emotion/styled";
import { Text } from ".";
import { colors } from "../libs/utils";

import PokeAPI from "pokedex-promise-v2";
const P = new PokeAPI();

const getStyle = () => {
  return `
  img {
    margin: 0 auto;
  }
  `;
};

const PixelatedPokemonCard = styled("div")((props) => getStyle(props));

const PokemonCard = ({ id, name, sprite, children }) => {
  return (
    <PixelatedPokemonCard className="pxl-border">
      <Text size="lg">#{id}</Text>
      {sprite && (
        <>
          <LazyLoadImage src={sprite} alt={name} width={96} />
        </>
      )}
      <Text variant="outlined" size="lg">
        {name}
      </Text>
      {children}
    </PixelatedPokemonCard>
  );
};

export default PokemonCard;
