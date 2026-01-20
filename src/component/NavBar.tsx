 import { HStack, Image,   } from "@chakra-ui/react";
 import ColorModeSwitch from "../component/ColorMode.tsx"

import logo from  "../assets/logo.png";
import SearchBox from "./SearchBox.tsx";
 const NavBar = ()=>{
    return(
        <HStack  padding='1rem'>
            <Image src={logo} boxSize='4rem'/>
            <SearchBox />
            <ColorModeSwitch/>
        </HStack>
    )
 }

 export default NavBar;  