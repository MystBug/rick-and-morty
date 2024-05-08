import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query GetEpisodes($page: Int!) {
    episodes(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        created
        characters {
          id
          name
          image
          origin {
            id
            name
            dimension
          }
        }
      }
    }
  }
`;
