import { useState } from "react";

import { Search } from "./components/search/Search.component";
import { SearchContext } from "./context/search.context";
import { Results } from "./components/search/Results.component";
import { Character } from "./types/character.types";

function App() {
  const [searchResults, setSearchResults] = useState<Character[] | null>(null);
  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      <Search />
      <Results />
    </SearchContext.Provider>
  );
}

export default App;
