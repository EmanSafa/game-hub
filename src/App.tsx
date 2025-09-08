import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const showAside = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main" `,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show when={showAside}>
          <GridItem area="aside " bg={"gold"}>
            aside
          </GridItem>
        </Show>
        <GridItem area="main" bg={"coral"}>
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
