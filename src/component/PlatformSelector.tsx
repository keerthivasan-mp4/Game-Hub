

import {Button,  Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";


// interface Props{
//     onSelectPlatform: (platform: Platform) => void;
// }

const PlatformSelector=()=>{

    
    return(
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown/>} marginLeft={3}> Platforms
                <MenuList>
                  

                     <MenuItem>item1</MenuItem>
                     <MenuItem>item1</MenuItem>
                     <MenuItem>item1</MenuItem>
                     <MenuItem>item1</MenuItem>
                     <MenuItem>item1</MenuItem>
                </MenuList>
            </MenuButton>
        </Menu>

    )
}

export default PlatformSelector;