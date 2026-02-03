import { Image, Img, SimpleGrid } from "@chakra-ui/react";
import useGameSS from "../hooks/useGameSS";

interface Props {
  gameId: number;
}
const GameScreenshot = ({ gameId }: Props) => {
  const { data: screenshot, isLoading, error } = useGameSS(gameId);
  console.log(screenshot);
  if(isLoading) return null;
  if(error) throw error;
  return <div>
    <SimpleGrid columns={{base: 1 , md: 2}}>
      {
        screenshot.results.map(file => 
            <Img src={file.image} alt="Game Screenshot" key={file.id} />
        )
      }
    </SimpleGrid>
  </div>;
};

export default GameScreenshot;
