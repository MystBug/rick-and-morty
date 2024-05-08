import { Fragment, useEffect, useState } from "react";

import { useLazyQuery } from "@apollo/client";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Skeleton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { GET_EPISODES } from "../queries/episodes.query";

import { Episode } from "../types/episode.types";
import { Character } from "../types/character.types";
import { Dimension } from "../types/dimension.types";

import { Tooltip } from "../components/Tooltip/Tooltip.component";

export const TopTen = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [getEpisodes, { loading, error, data }] = useLazyQuery(GET_EPISODES, {
    variables: { page: page },
  });

  useEffect(() => {
    getEpisodes();
  }, [getEpisodes]);

  useEffect(() => {
    getEpisodes();
  }, [page, getEpisodes]);

  useEffect(() => {
    if (data) {
      setEpisodes((prevEpisodes) => [
        ...prevEpisodes,
        ...data.episodes.results,
      ]);
      if (data.episodes.info.next) {
        setPage(data.episodes.info.next);
      }

      if (page === data.episodes.info.pages) {
        setFetching(false);
      }
    }
  }, [data, page]);

  if (error) return <p>Error: {error.message}</p>;
  if (fetching || loading)
    return (
      <div>
        {Array(10).map((index: number) => (
          <Skeleton key={index} animation="wave" />
        ))}
      </div>
    );

  // Determine the origin dimensions for each character.
  const getDimensions = (characters: Character[]) => {
    const dimensions = characters
      .filter((character) => character.origin.dimension !== "unknown")
      .filter((character) => character.origin.dimension !== null)
      .map((character: Character) => {
        return {
          dimension: character.origin.dimension,
          characterId: character.id,
        };
      });
    return dimensions;
  };

  // Count the unique origin dimensions for each episode.
  const countDimensions = (dimensions: Dimension[]) => {
    const counts: { [key: string]: number } = {};
    dimensions.forEach((dimension: Dimension) => {
      if (!counts[dimension.dimension]) {
        counts[dimension.dimension] = 0;
      }
      counts[dimension.dimension]++;
    });
    return counts;
  };

  // Rank the episodes based on the count of unique origin dimensions.
  const rankEpisodes = (episodes: Episode[]) => {
    const rankedEpisodes = episodes.map((episode: Episode) => {
      const dimensions = getDimensions(episode.characters);
      const counts = countDimensions(dimensions);
      return {
        episodeName: episode.name,
        counts: counts,
        characters: episode.characters,
      };
    });
    return rankedEpisodes;
  };

  const rankedEpisodes = rankEpisodes(episodes);

  // Display the top 10 episodes with the highest counts.
  const topTenEpisodes = rankedEpisodes
    .sort((a, b) => {
      return Object.keys(b.counts).length - Object.keys(a.counts).length;
    })
    .slice(0, 10);

  return (
    <div>
      {topTenEpisodes.map((episode, index) => {
        return (
          <Accordion key={`${episode}-${index}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${episode.episodeName}-content`}
              id={episode.episodeName}
            >
              {index + 1}. {episode.episodeName} (
              {Object.keys(episode.counts).length} dimensions)
            </AccordionSummary>
            <AccordionDetails>
              {Object.keys(episode.counts).map((dimension, index) => {
                return (
                  <div key={`${dimension}-${index}`}>
                    <h3>{dimension}</h3>
                    <div>
                      {episode.characters
                        .filter((character) => {
                          return character.origin.dimension === dimension;
                        })
                        .map((character) => {
                          return (
                            <Fragment key={character.id}>
                              <Tooltip {...character} />{" "}
                            </Fragment>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
