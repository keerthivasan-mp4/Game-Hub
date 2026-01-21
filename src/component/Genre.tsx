import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import UseGenre from "../Hooks/UseGenre";
import type { Genre } from "../Hooks/UseGenre";
import CroppedImageUrl from "./services/ImageUrl";

interface Props {
  onselectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onselectGenre }: Props) => {
  const { data, isLoading, error } = UseGenre();

  if (error) return null; //if there is error the genre list displays null
  if (isLoading) return <Spinner />;// displays the spinner while genre list is being fetched
  return (
    <>
      <Heading as="h2" marginY={3}>
        Genre
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY={1}>
               <Image
                boxSize="40px"
                borderRadius={5}
                src={CroppedImageUrl(genre.image_background)}
              /> {/*display a image, beside the Genre name for reference
                */}
            
             
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} //clickable button that display genre name, turns bold when clicked
                color={genre.id === selectedGenre?.id ? "red   " : "normal"}// turns to red when clicked
                onClick={() => onselectGenre(genre)}
                variant="link" //function called when a genre is clciked and displaying games on the selected genre
              >
                
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
