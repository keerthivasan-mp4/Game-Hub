import { Grid, GridItem, Show} from '@chakra-ui/react'

import NavBar from './component/NavBar';
import GameGrid from './component/GameGrid';

import PlatformSelector from './component/PlatformSelector';


// import  Genre from './component/Genre';
// import { useState } from 'react';
// import type  Genre  from "./Hooks/UseGenre.ts";






function App(){

  return(
    <Grid templateAreas={{base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`,
      md:`"nav aside" "main"`
    }}>

      <GridItem area='nav' bg=""><NavBar/>
      </GridItem>

      <GridItem area='main' bg="">
        <PlatformSelector/>
        <GameGrid  />
      </GridItem>
 
      
      <Show above='lg' >
      {/* <GridItem area='aside' paddingX={'4'}>
        <Genre />
        </GridItem> */}

      </Show>

    </Grid>
    
  )

}
 export default App;