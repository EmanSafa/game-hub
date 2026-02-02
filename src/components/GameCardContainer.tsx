import { Box } from "@chakra-ui/react";
interface IProps {
  children: React.ReactNode;
}
const GameCardContainer = ({ children }: IProps) => {
  return (
    <Box _hover={{transform:'scale(1.03)',
      transition:`transdorm .15s ease-in`
    }} borderRadius={"20px"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
