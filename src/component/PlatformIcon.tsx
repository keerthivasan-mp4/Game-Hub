import {FaWindows, FaPlaystation, FaXbox, FaLinux} from 'react-icons/fa'; 
import { Icon, Text } from "@chakra-ui/react";
import type  {Platform}  from "../Hooks/useGame";

interface Props{
    platform: Platform[]

}



const PlatformIcons = ({platform}:Props )=>{

    const iconMap:{[Key:string]:IconType} ={
        pc: FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        linux = FaLinux
        


    }
    return(
        <>
          {platform .map(( platform ) => (
          <Icon as={iconMap[platform.slug]}

        ))}
        </>

    )
}

export default PlatformIcons;