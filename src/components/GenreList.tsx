import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";
interface IProps {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}
const GenreList = ({ selectedGenreId, onSelectedGenre }: IProps) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
    <Heading fontSize={"2xl"} marginBottom={3}>Genres</Heading>
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              objectFit={"cover"}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              whiteSpace={"normal"}
              textAlign={"left"}
              variant="link"
              fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              onClick={() => {
                onSelectedGenre(genre);
              }}
              fontSize={"lg"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
