import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genre } from "../hooks/useGenres";

interface IProps {
  selectedGenre:Genre | null
}
const GameGrid = ({selectedGenre}:IProps) => {
  const { error, data, isLoading } = useGames(selectedGenre);
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
        spacing={4}
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
    </div>
  );
};

export default GameGrid;
