import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatorm = () => useData<Platform>("/platforms/lists/parents");
export default usePlatorm;
