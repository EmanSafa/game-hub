import { Box } from "@chakra-ui/react";
interface IProps {
  children: React.ReactNode;
}
const GameCardContainer = ({ children }: IProps) => {
  return (
    <Box borderRadius={"20px"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
