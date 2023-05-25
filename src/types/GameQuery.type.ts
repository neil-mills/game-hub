import { Genre } from './Genre.type';
import { Platform } from './Platform.type';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string | null;
}
