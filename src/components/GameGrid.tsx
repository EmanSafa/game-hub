import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <Text color="red">{error}</Text>}
      <h1>Game Grid</h1>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
        spacing={5}
        padding={2}
      >
        {isLoading &&
          skeleton.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
