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
  alignItems: "center",
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
  display: "flex",
  justifyContent: "space-between",
  gap: "1em",
  Button: {
    maxWidth: "3rem",
  },
});

export const PokemonInfoModal = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "0 16px",
  "div:first-child": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "div:last-child": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  },
});
