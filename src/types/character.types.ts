import { Episode } from "./episode.types";

export type CharacterStatus = "Alive" | "Dead" | "unknown";

export type Character = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: Episode[];
};
