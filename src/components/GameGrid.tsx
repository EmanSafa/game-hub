import {  SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "./../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface IProps {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: IProps) => {
  const { error, data, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;
  const FetchedGamesCount = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );
  return (
    <InfiniteScroll
      dataLength={FetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
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
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
