import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 95 ? "green" : score > 85 ? "yellow" : "red";

  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"3px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
