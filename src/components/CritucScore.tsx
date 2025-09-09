import { Badge } from "@chakra-ui/react";

interface IProps {
  score: number;
}

const CritucScore = ({ score }: IProps) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"5px"}
    >
      {score}
    </Badge>
  );
};

export default CritucScore;
