import { Heading } from '@chakra-ui/react';
import React from 'react';
import { GameQuery } from '../types/GameQuery.type';

interface Props {
  query: GameQuery;
}
function GameHeading({ query }: Props) {
  return (
    <Heading as="h1" marginY={5} fontSize={'5xl'}>
      {query?.platform?.name ? `${query.platform.name} ` : ''}
      {query?.genre?.name ? `${query.genre.name} ` : ''}
      Games
    </Heading>
  );
}

export default GameHeading;
