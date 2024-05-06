import { createContext } from "react";

import { Character } from "../types/character.types";

export const SearchContext = createContext({
  searchResults: <Character[] | null>[],
  setSearchResults: (_results: Character[] | null) => {},
});
