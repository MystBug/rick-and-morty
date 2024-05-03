import { createContext } from "react";

import { SearchResult } from "../types/search.types";

export const SearchContext = createContext(<SearchResult[] | null>[]);
