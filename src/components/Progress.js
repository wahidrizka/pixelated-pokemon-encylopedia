import styled from "@emotion/styled";
import { statsColor } from "../libs/utils";

const PixelatedProgress = styled("div")(({ stats }) => {
  return `
  padding: 0;
  padding-bottom: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  progress::-webkit-progress-value {
    background-color: ${statsColor[stats + ["-100"]]};
  }
  progress::-webkit-progress-bar {
    background-color: #;
  }`;
});

const Progress = ({ stats, statName, baseStat }) => {
  return (
    <PixelatedProgress stats={stats} className="pxl-border">
      <label htmlFor={statName}>{statName}</label>
      <progress id={statName} value={baseStat} max="200"></progress>
    </PixelatedProgress>
  );
};

export default Progress;
