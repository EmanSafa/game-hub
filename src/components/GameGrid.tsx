import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "../App";

interface IProps {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: IProps) => {
  const { error, data, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
        spacing={6}
        padding={2}
      >
        {isLoading &&
          skeleton.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
