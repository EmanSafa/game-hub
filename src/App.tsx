import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setselectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setselectedPlatform] = useState<Platform | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main" `,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside " paddingX={5}>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectedGenre={(genre) => setselectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform)=> setselectedPlatform(platform )} />
          <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
