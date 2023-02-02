import React from "react";
import styled from "@emotion/styled";

import { Text } from ".";
import { skillColor } from "../libs/utils";

const PixelatedTypeBadge = styled("div")(({ type }) => {
  return {
    maxWidth: "7rem",
    background: skillColor[type + "-200"],
    justifyContent: "center",
  };
});

const Badge = ({ type }) => {
  return (
    <PixelatedTypeBadge type={type} className="pxl-border">
      <Text variant="outlined" size="base">
        {type}
      </Text>
    </PixelatedTypeBadge>
  );
};

export default Badge;
