import type { Game } from "../entities/Types"
import { Box, SimpleGrid } from "@chakra-ui/react";
import DefiniationItem from './DefiniationItem';
import CritucScore from "./CritucScore";

interface IProps{
game:Game
}

const GameAttributes = ({game} : IProps) => {
  return (
     <SimpleGrid columns={2} spacing={10} marginTop={5} as={"dl"}>
        <DefiniationItem term="Platforms">{game?.parent_platforms?.map(({platform}) => (
            <Box key={platform.id}>{platform.name || "N/A"}</Box>
          ))}</DefiniationItem>
          
          <DefiniationItem term="MetaScore"><CritucScore score={game?.metacritic || 0} /></DefiniationItem>         
          <DefiniationItem term="Genres"> {game?.genres?.map((genre) => (
            <Box key={genre.id}>{genre.name || "N/A"}</Box>
          ))}</DefiniationItem>
       
         <DefiniationItem term="Publishers">
          {game?.publishers?.map((publisher) => (
            <Box key={publisher.id}> {publisher.name || "N/A"}</Box>
          ))}
          </DefiniationItem>
          </SimpleGrid>
  )
}

export default GameAttributes
