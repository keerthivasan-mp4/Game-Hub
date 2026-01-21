
import type { GameQuery } from "../App";//import GameQuery type from App
import useData from "./useData"; //import reuseble data-fetching hooks



// Platform Interface definition
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//g Game interface definition
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}


// Custom hook to fetch games based on query parameters
const useGames = (gameQuery: GameQuery) => useData<Game>(
  '/games', //API end point
  {
    params:
    {
      genres: gameQuery.genre?.id,    //filter by genres
      platforms: gameQuery.platform?.id,//filter by platform  
      ordering: gameQuery.sortOrder, //filter by sort order   
      search: gameQuery.searchText    //filter by search text    
    },
  },
  [gameQuery] //re-fetch games when query changes
);



export default useGames;