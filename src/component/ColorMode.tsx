import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeToggle() {
  const { toggleColorMode, colorMode } = useColorMode(); //destructure current color mode and toggle function
  return (
// horizontal stack to align items in a row
    <HStack> 
       {/* Switch toggles between light and dark mode */} 
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace={"nowrap"}>Dark Mode</Text>
    </HStack>
  );
}

export default ColorModeToggle;
