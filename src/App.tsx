import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import PlatformSelector from "./component/PlatformSelector";
import Genre from "./component/Genre";
import type { Platform } from "./Hooks/useGame";
// import type  Genre  from "./Hooks/UseGenre.ts";

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
        md: `"nav aside" "main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}>
      <GridItem area="nav" bg="">
        <NavBar />
      </GridItem>

      <GridItem area="main" bg="">
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={"4"}>
          <Genre
            selectedGenre={selectedGenre}
            onselectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}
export default App;
