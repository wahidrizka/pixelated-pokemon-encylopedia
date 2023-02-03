import React from "react";
import styled from "@emotion/styled";
import { units, colors } from "../libs/utils";
import Text from "./Text";

const StyledInfoButton = styled("button")({
  width: "90%",
  padding: units.spacing.sm,
  zIndex: 1,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: colors["blue-300"],
  },
  "&:active:after": {
    boxShadow: `inset 4px 4px ${colors["blue-500"]}`,
  },
});

const InfoButton = ({ ...props }) => {
  return (
    <StyledInfoButton className="pxl-border" {...props}>
      <Text variant="outlined" size="base">
        Details
      </Text>
    </StyledInfoButton>
  );
};

export default InfoButton;
