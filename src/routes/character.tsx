import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_CHARACTER_INFO_BY_ID } from "../queries/characters.query";
import { Episode } from "../types/episode.types";
import { Character as CharacterType } from "../types/character.types";
import Link from "@mui/material/Link";

import { CharacterCard } from "../components/card/CharacterCard";
import { Grid } from "@mui/material";

export default function Character() {
  const { characterId } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER_INFO_BY_ID, {
    variables: { id: characterId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <img src={data.character.image} alt={data.character.name} />
      <p>Name: {data.character.name}</p>
      <p>Status: {data.character.status}</p>
      <p>Species: {data.character.species}</p>
      <p>Type: {data.character.type}</p>
      <p>Gender: {data.character.gender}</p>
      <p>Created: {data.character.created}</p>
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
    </>
  );
}
