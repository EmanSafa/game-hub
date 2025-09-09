import { Box } from "@chakra-ui/react";
interface IProps {
  children: React.ReactNode;
}
const GameCardContainer = ({ children }: IProps) => {
  return (
    <Box width={"350px"} borderRadius={"20px"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
