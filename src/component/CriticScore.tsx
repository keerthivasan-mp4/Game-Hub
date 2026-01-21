import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
//component to display critic with color 
const CriticScore = ({ score }: Props) => {
  let color = score >= 85 ? "green" : score >= 60 ? "orange" : "red";// determine the color based on the score
  return (
    <Badge
      colorScheme={color}
      fontSize={"1.2rem"}
      paddingX={"1.5"}
      borderRadius={"11 "}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
