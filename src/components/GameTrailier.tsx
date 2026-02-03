import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
const GameTrailier = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useTrailers(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  const first = trailers?.results[0];
  return (
    <div>
      <video poster={first?.preview} src={first?.data[480]} controls />
    </div>
  );
};

export default GameTrailier;
