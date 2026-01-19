
import {  HStack,List, ListItem, Image, Spinner, Button } from "@chakra-ui/react";
import UseGenre from "../Hooks/UseGenre";
import type{Genre} from "../Hooks/UseGenre";
import CroppedImageUrl from "./services/ImageUrl";  

interface Props{
    onselectGenre: (genre: Genre) => void;
    selectedGenre: Genre|null;
}


const Genre = ({selectedGenre, onselectGenre}:Props )=>{

    const {data, isLoading, error} = UseGenre();

if(error) return(null);
    if(isLoading)
 return <Spinner/>
    return( 

     <List>
        {data.map(genre =>
            <ListItem key={genre.id}>
                <HStack paddingY={1}>
                <Image boxSize='40px' borderRadius={5} src={CroppedImageUrl(genre.image_background)}>
                </Image>
                   <Button fontWeight={genre.id=== selectedGenre?.id ? 'bold' : 'normal'} color={genre.id=== selectedGenre?.id ? 'red   ' : 'normal'} onClick={()=> onselectGenre(genre)} variant='link'> {genre.name} </Button>
                </HStack>
                </ListItem>)}
     </List>

    )

}

export default Genre;