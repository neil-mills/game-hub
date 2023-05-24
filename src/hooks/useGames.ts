import { AxiosError, CanceledError } from 'axios';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const getGames = async () => {
      try {
        setIsLoading(true);
        const res = await apiClient.get<FetchGamesResponse>('/games', {
          signal: controller.signal,
        });
        setGames(res.data.results);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        setIsLoading(false);
      }
    };
    getGames();
    return () => controller.abort();
  }, []);
  return { games, error, isLoading };
};

export default useGames;
