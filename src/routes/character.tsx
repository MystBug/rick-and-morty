import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_CHARACTER_INFO_BY_ID } from "../queries/characters.query";
import { Episode } from "../types/episode.types";
import { Character as CharacterType } from "../types/character.types";
import Link from "@mui/material/Link";

import { CharacterCard } from "../components/card/CharacterCard";
import { Grid, Table, TableCell, TableRow } from "@mui/material";

export default function Character() {
  const { characterId } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER_INFO_BY_ID, {
    variables: { id: characterId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Grid container padding={4}>
      <img
        style={{ borderRadius: "50%" }}
        src={data.character.image}
        alt={data.character.name}
      />
      <Table>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>{data.character.name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Status</TableCell>
          <TableCell>{data.character.status}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Species</TableCell>
          <TableCell>{data.character.species}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Type</TableCell>
          <TableCell>{data.character.type}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Gender</TableCell>
          <TableCell>{data.character.gender}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Created</TableCell>
          <TableCell>{data.character.created}</TableCell>
        </TableRow>
      </Table>
      {data.character.origin && (
        <div>
          <h2>Origin</h2>
          <>
            <p>Origin name: {data.character.origin.name}</p>
            <p>Origin dimension: {data.character.origin.dimension}</p>
            <h3>Residents</h3>
            {data.character.origin.residents && (
              <Grid container spacing={2} padding={2} justifyContent={"center"}>
                {data.character.origin.residents.map(
                  (resident: CharacterType) => (
                    <CharacterCard key={resident.id} {...resident} />
                  )
                )}
              </Grid>
            )}
          </>
        </div>
      )}

      {data.character.episode && (
        <div>
          <h2>Episodes</h2>
          {data.character.episode.map((episode: Episode) => (
            <div key={episode.id}>
              <p>Name: {episode.name}</p>
              <p>Episode: {episode.episode}</p>
              <p>Air date: {episode.air_date}</p>
              <strong>Characters: </strong>
              {episode.characters.map((character: CharacterType) => (
                <Link
                  key={character.id}
                  href={`/character-details/${character.id}`}
                >
                  {character.name},{" "}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </Grid>
  );
}
