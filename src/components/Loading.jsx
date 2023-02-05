import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { Text } from ".";
import { colors } from "../libs/utils";

const spin = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

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
