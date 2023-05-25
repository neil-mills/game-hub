import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
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
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
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
  );
};

export default GenreList;
