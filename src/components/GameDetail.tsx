import { useParams } from "react-router-dom";
import useSingleGames from "../hooks/useSingleGame";
import { Box, Spinner } from "@chakra-ui/react";
import ExpandableText from "./ExpandableText";
import GameAttributes from "./GameAttributes";

const GameDetail = () => {
  const { slug } = useParams();
  const { data: singleGame, isLoading } = useSingleGames(String(slug));
  console.log(singleGame);
  if (isLoading) return <Spinner />;

  return (
    <Box padding={5} margin={3}>
      <ExpandableText limit={300}>
        {singleGame?.description || "No description available."}
      </ExpandableText>
      <GameAttributes game={singleGame}></GameAttributes>
    </Box>
  );
};

export default GameDetail;
