import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";
import type { Platform } from "../Hooks/useGame";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";

interface Props {
  platforms: Platform[];
}

const PlatformIcons = ({ platforms }: Props) => {
     // Map platform slugs to corresponding icons
  const iconMap: { [Key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack margin={2}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
