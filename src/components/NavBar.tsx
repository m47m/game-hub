import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import someone from "../assets/someone.svg";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={someone} boxSize="60px" />
      {/* <Text fontSize="2xl" fontWeight="bold">
        Someone
      </Text> */}

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
