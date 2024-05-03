import { useEffect, useState } from "react";
import { Input, InputAdornment } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { GET_CHARACTERS_BY_NAME } from "../../queries/characters.query";
import { useLazyQuery } from "@apollo/client";
import { SearchResult } from "../../types/search.types";

type SearchProps = {
  handleSearchResults: (results: SearchResult[] | null) => void;
};

export const Search = ({ handleSearchResults }: SearchProps) => {
  const [search, setSearch] = useState("");

  const [getCharactersByName, { loading, error, data }] = useLazyQuery(
    GET_CHARACTERS_BY_NAME
  );

  useEffect(() => {
    handleSearchResults(data?.characters.results || []);
  }, [data, handleSearchResults]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getCharactersByName({ variables: { name: search } });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      style={{
        width: "100%",
        padding: "5rem",
        paddingBottom: 0,
      }}
    >
      <Input
        id="standard-basic"
        onChange={handleChange}
        fullWidth
        placeholder="Search for a character with their name"
        autoFocus
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />{" "}
    </form>
  );
};
