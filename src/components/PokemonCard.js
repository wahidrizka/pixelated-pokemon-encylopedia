import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "@emotion/styled";
import { Text } from ".";

const getStyle = () => {
  return `
  img {
    
    margin: 0.3rem auto;
  }
  `;
};

const PixelatedPokemonCard = styled("div")((props) => getStyle(props));

const PokemonCard = ({ id, name, sprite, children }) => {
  return (
    <PixelatedPokemonCard className="pxl-border">
      <Text size="lg" variant="gray">
        #{id}
      </Text>
      {sprite && (
        <>
          <LazyLoadImage
            src={sprite}
            alt={name}
            height={70}
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
