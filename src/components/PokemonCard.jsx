import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "@emotion/styled";
import { Text } from ".";

const getStyle = () => {
  return `
    height: 300px;
    img {
      width: 120px;
    }
  `;
};

const PixelatedPokemonCard = styled("div")((props) => getStyle(props));

const PokemonCard = ({ id, name, sprite, children }) => {
  return (
    <PixelatedPokemonCard className="pxl-border">
      {id && (
        <Text size="lg" variant="gray">
          #{id}
        </Text>
      )}
      {sprite && (
        <>
          <LazyLoadImage
            src={sprite}
            alt={name}
            placeholderSrc="/static/pokemon-placeholder.png"
            onError={(event) =>
              (event.target.src = "static/pokemon-placeholder.png")
            }
          />
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
