import React from "react";
import styled from "@emotion/styled";

import { Text } from ".";

const StyledLoading = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  gap: "1rem",
});

const Loading = ({ label }) => {
  return (
    <StyledLoading>
      <img src="/static/pikachu-loading.gif" alt="pikachu-loading" width={256}/>
      {label && (
        <Text variant="outlined" size="lg">
          {label}
        </Text>
      )}
    </StyledLoading>
  );
};

export default Loading;
