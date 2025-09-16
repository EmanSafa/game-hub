import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import type { FetchResponse } from "./useData";
import platforms from "../data/platforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatorm = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms },
  });
export default usePlatorm;
