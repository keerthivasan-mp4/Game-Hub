
import {  HStack,List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import UseGenre from "../Hooks/UseGenre";
import type{Genre} from "../Hooks/UseGenre";
import CroppedImageUrl from "./services/ImageUrl";  




const Genre = ( )=>{

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
                   <Text> {genre.name} </Text>
                </HStack>
                </ListItem>)}
     </List>

    )

}

export default Genre;