import { Heading, HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "../component/ColorMode.tsx";

import logo from "../assets/logo.svg"; //svg from svgrepo.com
import SearchBox from "./SearchBox.tsx";

import "../index.css"

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <>
      <Heading className="heading" as={"h1"} fontSize={"3rem"} textAlign={"center"}  fontFamily={'ui-monospace'}>
        
        Game Hub
      </Heading>
      <Heading as={"h5"} fontSize={"1.5rem"} textAlign={"center"} fontWeight={'3'}>
        
        Your Ultimate Game Library
      </Heading>
      <HStack padding="1rem">
        <Image src={logo} boxSize="4rem" /> {/*  */}
        <SearchBox onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
