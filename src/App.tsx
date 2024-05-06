import { useState } from "react";

import { Search } from "./components/search/Search.component";
import { SearchContext } from "./context/search.context";
import { Results } from "./components/search/Results.component";
import { SearchResult } from "./types/search.types";

function App() {
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null
  );
  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      <Search />
      <Results />
    </SearchContext.Provider>
  );
}

export default App;
