import { Card, CardBody, Heading,  HStack,  Image } from 
"@chakra-ui/react";
import type {Game} from "../Hooks/useGame";
import PlatformIcons from "./PlatformIcon";
import CriticScore from "./CriticScore";
import CroppedImageUrl from "./services/ImageUrl";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={ CroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={'space-between'}>

        <PlatformIcons platforms={game.parent_platforms.map(p=>p.platform)}/>
          <CriticScore score ={game.metacritic}/> 
      
        </HStack>
      </CardBody>
    </Card>
  );
};
export default GameCard;
