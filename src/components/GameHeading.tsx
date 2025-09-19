import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatorm from "../hooks/usePlatforms";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platorms } = usePlatorm();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platorms?.results.find((p) => p.id === gameQuery.platformId);
  const heading = ` ${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
