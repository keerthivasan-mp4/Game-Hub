
import { HStack, List, ListItem, Image, Button, Spinner,   } from "@chakra-ui/react";
import UseGenre from "../Hooks/UseGenre";
import CroppedImageUrl from "./services/ImageUrl";


const Genre = ()=>{

    const {genres, isLoading} = UseGenre();

    if(isLoading)
 return <Spinner/>
    return(

     <List>
        {genres?.map(genre => 
        <ListItem key={genre.id}> 
        <HStack >
            <Image boxSize={'35px'} borderRadius={8} src={CroppedImageUrl(genre.image_background)} justifyContent={'space-evenly'} marginTop={3}  />
            <Button onClick={()=>console.log(genre)}fontSize={'ms'} variant={'link'}>{genre.name}</Button >
        </HStack>
        </ListItem>)}
     </List>
    )

}

export default Genre;