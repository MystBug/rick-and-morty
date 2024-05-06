import { CharacterStatus } from "./character.types";

export type SearchResult = {
  name: string;
  image: string;
  status: CharacterStatus;
  id: number;
};
