import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import type { Game } from "../entities/Types";
const apiClient = new APIClient<Game>("/games");

const useSingleGames = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getSingleGame(String(slug)),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
export default useSingleGames;
