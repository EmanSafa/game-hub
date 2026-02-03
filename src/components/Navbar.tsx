import { HStack, Image } from "@chakra-ui/react";
import logoImg from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding={"10px"}>
     <Link to={'/'} >
     <Image src={logoImg} boxSize={50} />
     </Link> 
      <SearchInput  />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
