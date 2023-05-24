import apiClient from '../services/api-client';
import { SimpleGrid, Text } from '@chakra-ui/react';
import useData from '../hooks/useData';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
const skeletons = Array.from({ length: 6 }).map((_item, i) => i);
import { Game } from '../types/Game.type';

const GameGrid = () => {
  const { data: games, error, isLoading } = useData<Game>('/games');
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
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
    </>
  );
};

export default GameGrid;
