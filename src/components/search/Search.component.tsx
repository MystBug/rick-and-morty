import { useState } from "react";
import { useNavigate } from "react-router";

import { useLazyQuery } from "@apollo/client";
import { Input, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { GET_CHARACTERS_BY_NAME } from "../../queries/characters.query";

export const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const [getCharactersByName, { error, data }] = useLazyQuery(
    GET_CHARACTERS_BY_NAME
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${search}/1`);
    getCharactersByName({ variables: { page: 1, name: search } });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      style={{
        width: "100%",
        padding: "2rem 5rem",
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
      {error && <p>Error: {error.message}</p>}
      {data?.characters.results.length === 0 && (
        <p>No results found for "{search}"</p>
      )}
    </form>
  );
};
