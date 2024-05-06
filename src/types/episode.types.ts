import { Character } from "./character.types";

export type Episode = {
  id: string;
  episode: string;
  name: string;
  air_date: string;
  characters: Character[];
};
