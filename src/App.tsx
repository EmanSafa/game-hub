import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import "./App.css";

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
        <GridItem area="nav" bg={"coral"}>
          nav
        </GridItem>
        <Show when={showAside}>
          <GridItem area="aside " bg={"gold"}>
            aside
          </GridItem>
        </Show>
        <GridItem area="main" bg={"navy"}>
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
