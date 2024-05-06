import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_CHARACTER_INFO_BY_ID } from "../queries/characters.query";
import { Episode } from "../types/episode.types";
import { Character as CharacterType } from "../types/character.types";
import Link from "@mui/material/Link";

import { CharacterCard } from "../components/card/CharacterCard";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

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
      <Paper style={{ marginBottom: "1rem" }}>
        <Table>
          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>
      {data.character.origin && (
        <div>
          <h2>Origin</h2>
          <Paper style={{ marginBottom: "1rem" }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Origin name</TableCell>
                  <TableCell> {data.character.origin.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Origin dimension</TableCell>
                  <TableCell> {data.character.origin.dimension}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Residents</TableCell>
                  <TableCell>
                    {data.character.origin.residents &&
                      data.character.origin.residents.map(
                        (resident: CharacterType) => (
                          <Link
                            key={resident.id}
                            href={`/character-details/${resident.id}`}
                          >
                            {resident.name},{" "}
                          </Link>
                        )
                      )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </div>
      )}

      {data.character.episode && (
        <div>
          <h2>Episodes</h2>
          {data.character.episode.map((episode: Episode) => (
            <Paper key={episode.id} style={{ marginBottom: "1rem" }}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>{episode.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Episode</TableCell>
                    <TableCell>{episode.episode}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Air date</TableCell>
                    <TableCell>{episode.air_date}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Characters</TableCell>
                    <TableCell>
                      {episode.characters.map((character: CharacterType) => (
                        <Link
                          key={character.id}
                          href={`/character-details/${character.id}`}
                        >
                          {character.name},{" "}
                        </Link>
                      ))}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          ))}
        </div>
      )}
    </Grid>
  );
}
