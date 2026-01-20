import { useState } from "react";
import {  Grid, GridItem,  HStack,  Show } from "@chakra-ui/react";

import NavBar from "./component/NavBar";
// import GameGrid from "./component/GameGrid";
import PlatformSelector from "./component/PlatformSelector";
import Genre from "./component/Genre";
import type { Platform } from "./Hooks/useGame";
import SortBy from "./component/sortBy";

import GameGrid from "./component/GameGrid";
// import type  Genre  from "./Hooks/UseGenre.ts";

 export interface GameQuery{
  genre: Genre|null;
  platform: Platform|null;
  sortOrder: string;
}

function App() {


  const [gameQuery, setGameQuery]=useState<GameQuery>({ } as GameQuery)

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

        <HStack  marginRight={'.9rem'} marginBottom={1}>

        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} />


         <SortBy sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery,sortOrder})}  />
          </HStack>

        <GameGrid
          gameQuery={gameQuery}/>

      </GridItem>




      <Show above="lg"> 
        <GridItem area="aside" paddingX={"4"}>
          <Genre
            selectedGenre={gameQuery.genre}
            onselectGenre={(genre) => setGameQuery({...gameQuery, genre})}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}
export default App;
