import { useContext } from "react";
import { Grid, Box } from "@mui/material";

import { SearchContext } from "../../context/search.context";
import { CharacterCard } from "../card/CharacterCard";

export const Results = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} padding={2} justifyContent={"center"}>
        {searchResults &&
          searchResults.map((row) => <CharacterCard key={row.id} {...row} />)}
      </Grid>
    </Box>
  );
};
