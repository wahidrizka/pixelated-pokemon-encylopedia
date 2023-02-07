import styled from "@emotion/styled";
import { units } from "../../libs/utils";

export const Container = styled("section")({
  maxWidth: `${units.screenSize["xl"]}`,
  margin: "0 auto",
  padding: "10px 16px",
  textAlign: "center",

  "@media (min-width: 1024px)": {
    padding: "10px 0",
  },
});

export const Grid = styled("div")({
  display: "grid",
  gap: "16px",
  margin: "16px 0",
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  "@media (min-width: 640px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  },
  "@media (min-width: 1280px)": {
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  },
});

export const WrapperCardList = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 7,
});

export const TypeContainer = styled("div")({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
});

export const Pagination = styled("div")({
  marginTop: "1rem",
  display: "flex",
  justifyContent: "space-between",
  gap: "1em",
  Button: {
    maxWidth: "3rem",
  },
});

export const SearchSection = styled("div")({
  display: "flex",
  gap: "0.1rem",
});

export const SearchPokemon = styled("form")({
  display: "flex",
  gap: "0.1rem",
  width: "20rem",
});

export const PokemonInfoModal = styled("div")({
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
});

export const InfoName = styled("div")({
  paddingBottom: "3px",
  textTransform: "uppercase",
});

export const InfoImage = styled("div")({
  textTransform: "capitalize",
  position: "absolute",
  top: "30px",
});

export const InfoType = styled("div")({
  gap: "1rem",
  display: "flex",
  flexDirection: "row",
});

export const InfoDescription = styled("div")({
  paddingBottom: "3px",
  textAlign: "justify",
});

export const InfoWeightHeight = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
});

export const InfoStats = styled("div")({
  gap: "1rem",
});

export const InfoBackButton = styled("div")({
  display: "flex",
});
