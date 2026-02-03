import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import type { Trailier } from "../entities/Types"

const useTrailers = (gameId:number) => {
    const apiclient = new APIClient<Trailier>(`games/${gameId}/movies`)
    return useQuery( {
    queryKey:['trailers' , gameId],
    queryFn: apiclient.getAll
})
}

export default useTrailers