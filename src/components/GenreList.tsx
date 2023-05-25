import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from '@chakra-ui/react';
import useData from '../hooks/useData';
import getCroppedImageUrl from '../services/image-url';
import { Genre } from '../types/Genre.type';
import { GameQuery } from '../types/GameQuery.type';

interface Props {
  onSelectGenre: (query: GameQuery) => void;
  query: GameQuery;
}
const GenreList = ({ onSelectGenre, query }: Props) => {
  const { data, error, isLoading } = useData<Genre>('/genres');
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={'cover'}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={'normal'}
                textAlign={'left'}
                fontWeight={genre.id === query?.genre?.id ? 'bold' : 'normal'}
                onClick={() => onSelectGenre({ ...query, genre })}
                fontSize="lg"
                variant="link">
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
