import styled from "@emotion/styled";

export const Container = styled("section")({
  backgroundImage: "url('/static/pokemon-group.png')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minWidth: "100vw",
  backgroundSize: "cover",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
  padding: "1em",
});

export const Centering = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "1em",
});

export const A = styled("a")({
  textDecoration: "underline",
});
