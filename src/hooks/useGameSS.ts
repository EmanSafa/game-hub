import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import type { Screenshot } from "../entities/Types";

const useGameSS = (gameId: number) => {
  const apiclient = new APIClient<Screenshot>(`games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiclient.getAll,
  });
};

export default useGameSS;
