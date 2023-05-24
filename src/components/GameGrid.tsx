import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosError } from 'axios';
import { Text } from '@chakra-ui/react';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const getGames = async () => {
      try {
        const res = await apiClient.get<FetchGamesResponse>('/xgames');
        setGames(res.data.results);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
    getGames();
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
