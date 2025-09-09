import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CritucScore from "./CritucScore";
import { getCroppedImageUrl } from "./../services/image-url";

interface IProps {
  game: Game;
}

const GameCard = ({ game }: IProps) => {
  return (
    <Card width={"350px"} borderRadius={"20px"} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CritucScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
