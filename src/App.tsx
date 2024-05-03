import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Search } from "./components/search/Search.component";
import { SearchContext } from "./context/search.context";
import { Results } from "./components/search/Results.component";
import { SearchResult } from "./types/search.types";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <SearchContext.Provider value={searchResults}>
        <CssBaseline />
        <Search handleSearchResults={setSearchResults} />
        <Results />
      </SearchContext.Provider>
    </ThemeProvider>
  );
}

export default App;
