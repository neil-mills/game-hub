import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useData from '../hooks/useData';
import getCroppedImageUrl from '../services/image-url';
import { Genre } from '../types/Genre.type';

const GenreList = () => {
  const { data, error, isLoading } = useData<Genre>('/genres');
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
