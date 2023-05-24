import { AxiosError, CanceledError } from 'axios';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';

interface Result<T> {
  data: T[];
  error: string;
  isLoading: boolean;
}
interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const useData = <TData>(url: string): Result<TData> => {
  const [data, setData] = useState<TData[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await apiClient.get<FetchDataResponse<TData>>(url, {
          signal: controller.signal,
        });
        setData(res.data.results);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        setIsLoading(false);
      }
    };
    getData();
    return () => controller.abort();
  }, []);
  return { data, error, isLoading };
};

export default useData;
