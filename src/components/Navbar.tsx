import { HStack, Image, } from "@chakra-ui/react";
import logoImg from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding={"10px"}>
      <Image src={logoImg} boxSize={50} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
