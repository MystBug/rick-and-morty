export type CharacterStatus = "Alive" | "Dead" | "unknown";

export type SearchResult = {
  name: string;
  image: string;
  status: CharacterStatus;
};
