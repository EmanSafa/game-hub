import { useParams } from "react-router-dom";
import useSingleGames from "../hooks/useSingleGame";
import {  GridItem, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "./ExpandableText";
import GameAttributes from "./GameAttributes";
import GameTrailier from "./GameTrailier";
import GameScreenshot from "./GameScreenshot";

const GameDetail = () => {
  const { slug } = useParams();
  const { data: singleGame, isLoading } = useSingleGames(String(slug));
  if (isLoading) return <Spinner />;

  return (
    <SimpleGrid columns={{base:1 , md:2}} spacing={5} padding={5} margin={3}>
      <GridItem>
      <ExpandableText limit={300}>
        {singleGame?.description || "No description available."}
      </ExpandableText>
      <GameAttributes game={singleGame}></GameAttributes>
      </GridItem>
      <GridItem>
      <GameTrailier gameId={singleGame.id}/>
      <GameScreenshot gameId={singleGame.id}></GameScreenshot>
      </GridItem>
    </SimpleGrid>

  );
};

export default GameDetail;
