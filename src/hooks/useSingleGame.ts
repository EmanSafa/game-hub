import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
export interface Game {
  id: number;
  name: string;
  slug: string;
  description: string;
  released: string;
  background_image: string;
  ratings: number;
}

const apiClient = new APIClient<Game>("/games");

const useSingleGames = (slug:  string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getSingleGame(String(slug)),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
export default useSingleGames;
