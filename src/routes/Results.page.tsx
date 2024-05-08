import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Grid, Box } from "@mui/material";
import { useLazyQuery } from "@apollo/client";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { GET_CHARACTERS_BY_NAME } from "../queries/characters.query";

import { Character } from "../types/character.types";

import { CharacterCard } from "../components/card/CharacterCard.component";
import { ResultsPageLoader } from "../components/customLoaders/ResultsPage.component";

export const Results = () => {
  const { searchTerm, page } = useParams();
  const navigate = useNavigate();

  const [resultList, setResultList] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [getCharacters, { loading, error, data }] = useLazyQuery(
    GET_CHARACTERS_BY_NAME,
    {
      variables: { page: +currentPage, name: searchTerm },
    }
  );

  useEffect(() => {
    setCurrentPage(page ? +page : currentPage);
  }, [page, currentPage]);

  useEffect(() => {
    console.log(currentPage);
    if (currentPage) getCharacters();
  }, [getCharacters, currentPage]);

  useEffect(() => {
    if (data) {
      setResultList(data.characters.results);
    }
  }, [data, currentPage]);

  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <ResultsPageLoader />;
  if (!data) return <p>No characters found.</p>;

  const handlePaginationChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    navigate(`/search/${searchTerm}/${value}`);
    scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <span>
        Results for "{searchTerm}" {<br />}
        {Number(currentPage) * 20 > data.characters.info.count
          ? data.characters.info.count
          : `${Number(currentPage) * 20 - 20} - ${
              Number(currentPage) * 20
            }`}{" "}
      </span>
      {data.characters.info.count && (
        <>
          <span>of ({data.characters.info.count}) results found.</span>
          <Stack>
            <Pagination
              style={{ display: "flex", justifyContent: "center" }}
              count={data.characters.info.pages}
              page={Number(currentPage)}
              defaultPage={Number(currentPage)}
              onChange={handlePaginationChange}
            />
          </Stack>
          <Grid container spacing={2} padding={2} justifyContent={"center"}>
            {data &&
              resultList.map((row: Character, index: number) => (
                <CharacterCard key={`${index}`} {...row} />
              ))}
            {loading && <p>Loading...</p>}
          </Grid>
          <Stack>
            <Pagination
              style={{ display: "flex", justifyContent: "center" }}
              count={data.characters.info.pages}
              page={Number(currentPage)}
              defaultPage={Number(currentPage)}
              onChange={handlePaginationChange}
            />
          </Stack>
        </>
      )}
    </Box>
  );
};
