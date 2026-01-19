

import {Button,  Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../Hooks/usePlatforms";
import type { Platform } from "../Hooks/useGame";


interface Props{
    onSelectPlatform: (platform: Platform) => void 
    selectedPlatform: Platform | null;
}

const PlatformSelector=({onSelectPlatform}:Props)=>{

    const{data} = usePlatforms();

    
       
    return(
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown/>} marginLeft={3}> Platforms
                <MenuList>
                  
                  {data.map(platform => 
                    <MenuItem onClick={()=> onSelectPlatform(platform)} key={platform.id}>
                        
                  {platform.name}
                  </MenuItem>)}

                   
                </MenuList>
            </MenuButton>
        </Menu>

    )
}

export default PlatformSelector;