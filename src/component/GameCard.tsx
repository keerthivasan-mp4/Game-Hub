import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../Hooks/useGame";
import PlatformIcons from "./PlatformIcon";
import CriticScore from "./CriticScore";
import CroppedImageUrl from "./services/ImageUrl";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      
      <Image src={CroppedImageUrl(game.background_image)} />{/* displays the Game Poster/ Image */}

      <CardBody> {/* conatiner that contains, heading, platform icons, critic score componenet */}
        <Heading fontSize="1.3rem" whiteSpace={"normal"}>
          {game.name}
        </Heading> {/* Updates the heading dynamically when the user selects, platform or Genre */}
        
        <HStack  marginTop='.3rem' justifyContent={"space-between"}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)} //component that displays platforms, Xbox, Windows, PS etc
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
export default GameCard;
