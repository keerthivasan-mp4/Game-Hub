
// import { HStack, List, ListItem, Image, Button, Spinner,   } from "@chakra-ui/react";
import UseGenre from "../Hooks/UseGenre";
import type{Genre} from "../Hooks/UseGenre";
// import CroppedImageUrl from "./services/ImageUrl";  
import UseData from "../Hooks/useData";



const Genre = ( )=>{

    const {data} = UseGenre();

//     if(isLoading)
//  return <Spinner/>
    return( 

     <ul>
        {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
     </ul>

    )

}

export default Genre;