import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../entities/Types";
import PlatformIconList from "./PlatformIconList";
import CritucScore from "./CritucScore";
import { getCroppedImageUrl } from "./../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface IProps {
  game: Game;
}

const GameCard = ({ game }: IProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CritucScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
