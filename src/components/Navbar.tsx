import { HStack, Image } from "@chakra-ui/react";
import logoImg from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={logoImg} boxSize={50} />
      <SearchInput  />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
