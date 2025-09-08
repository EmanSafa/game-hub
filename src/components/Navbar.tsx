import { HStack, Image, Text } from "@chakra-ui/react";
import logoImg from "../assets/logo.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logoImg} boxSize={50} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default Navbar;
