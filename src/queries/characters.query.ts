import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        name
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;

export const GET_CHARACTERS_BY_NAME = gql`
  query GetCharactersByName($name: String!) {
    characters(page: 1, filter: { name: $name }) {
      info {
        count
      }
      results {
        name
        image
        status
      }
    }
  }
`;
