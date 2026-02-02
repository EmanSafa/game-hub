import { useParams } from "react-router-dom";
import useSingleGames from "../hooks/useSingleGame";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

const CardDetailis = () => {
  const { slug } = useParams();
  const { data: singleGame, isLoading } = useSingleGames(String(slug));
  if (isLoading) return <Spinner />;

  return (
    <Box padding={5} margin={3}>
      <Heading>{singleGame?.name}</Heading>
      <Text>{singleGame?.description}</Text>
    </Box>
  );
};

export default CardDetailis;
