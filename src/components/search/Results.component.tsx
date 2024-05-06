import { Grid, Box } from "@mui/material";

import { CharacterCard } from "../card/CharacterCard";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS_BY_NAME } from "../../queries/characters.query";
import { Character } from "../../types/character.types";

export const Results = () => {
  const { searchTerm } = useParams();

  const { loading, error, data } = useQuery(GET_CHARACTERS_BY_NAME, {
    variables: { name: searchTerm },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} padding={2} justifyContent={"center"}>
        {data.characters.results &&
          data.characters.results.map((row: Character) => (
            <CharacterCard key={row.id} {...row} />
          ))}
      </Grid>
    </Box>
  );
};
