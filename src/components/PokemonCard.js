import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "@emotion/styled";
import { Text } from ".";
import { colors } from "../libs/utils";

const getStyle = () => {
  return `
  img {
    margin: 0 auto;
  }
  `;
};

const PixelatedPokemonCard = styled("div")(getStyle());

const PokemonCard = ({ name, sprite, children }) => {
  return (
    <PixelatedPokemonCard className="pxl-border">
      {sprite && (
        <>
          <LazyLoadImage src={sprite} alt={name} width={96} />
        </>
      )}
      <Text>{name}</Text>
      {children}
    </PixelatedPokemonCard>
  );
};

export default PokemonCard;
