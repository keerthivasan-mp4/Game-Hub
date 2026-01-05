import { Card, CardBody, Heading, Text, Image } from 
"@chakra-ui/react";
import type {Game} from "../Hooks/useGame";
import PlatformIcons from "./PlatformIcon";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIcons platform={game.parent_platforms.map(p=>p.platform)}/>
      
      </CardBody>
    </Card>
  );
};
export default GameCard;
