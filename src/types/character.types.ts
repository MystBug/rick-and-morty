import { Episode } from "./episode.types";

export type CharacterStatus = "Alive" | "Dead" | "unknown";

export type Origin = {
  id: number;
  name: string;
  dimension: string;
};

export type Character = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: Episode[];
  origin: Origin;
};
