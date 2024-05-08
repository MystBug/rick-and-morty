import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

import { GET_CHARACTER_INFO_BY_ID } from "../queries/characters.query";

import { Episode } from "../types/episode.types";
import { Character as CharacterType } from "../types/character.types";

import { Tooltip } from "../components/Tooltip/Tooltip.component";
import { CharacterPageLoader } from "../components/customLoaders/CharacterPage.component";

export const Character = () => {
  const { characterId } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER_INFO_BY_ID, {
    variables: { id: characterId },
  });

  if (loading) return <CharacterPageLoader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Grid container>
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <img
          style={{ borderRadius: "50%", maxWidth: "300px", maxHeight: "300px" }}
          src={data.character.image}
          alt={data.character.name}
        />
        <Paper
          style={{
            marginLeft: "1rem",
            width: "100%",
          }}
        >
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
      </div>
      {data.character.origin && (
        <div style={{ width: "100%" }}>
          <h2>Origin</h2>
          <Paper style={{ marginBottom: "1rem" }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Origin name</TableCell>
                  <TableCell>{data.character.origin.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Origin dimension</TableCell>
                  <TableCell>{data.character.origin.dimension}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Residents</TableCell>
                  <TableCell>
                    {data.character.origin.residents &&
                      data.character.origin.residents.map(
                        (resident: CharacterType) => (
                          <Fragment key={resident.id}>
                            <Tooltip {...resident} />{" "}
                          </Fragment>
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
                        <Fragment key={character.id}>
                          <Tooltip {...character} />{" "}
                        </Fragment>
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
};
