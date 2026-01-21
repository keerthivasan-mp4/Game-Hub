import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";


interface Props{
    gameQuery: GameQuery;
}


const GameHeading = ({gameQuery}:Props)=>
    {
        const heading=`${gameQuery.platform?.name || 'Platforms'}  ${gameQuery.genre?.name||'Genre'}` 
        {/* dynamically displays what platform and genre user clicked */}
        return(
            <Heading as='h2' marginLeft={3} marginY={3}>
                {heading}
            </Heading>

        )

}

export default GameHeading;