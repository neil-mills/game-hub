import apiClient from '../services/api-client';
import { SimpleGrid, Text } from '@chakra-ui/react';
import useData from '../hooks/useData';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
const skeletons = Array.from({ length: 6 }).map((_item, i) => i);
import { Game } from '../types/Game.type';
import { GameQuery } from '../types/GameQuery.type';

interface Props {
  query: GameQuery;
}
const GameGrid = ({ query }: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useData<Game>(
    '/games',
    {
      params: {
        genres: query?.genre?.id,
        platforms: query?.platform?.id,
        ordering: query?.ordering,
        search: query?.search,
      },
    },
    [query?.genre?.id, query?.platform?.id, query?.ordering, query?.search]
  );
  console.log({
    genres: query?.genre?.id,
    platforms: query?.platform?.id,
    ordering: query?.ordering,
    search: query?.search,
  });
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px">
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
