import { gql } from "@apollo/client";

const PLANETS_QUERY = gql`
  query Chapters {
    allPlanets {
      planets {
        name
        filmConnection {
          films {
            title
            episodeID
            id
          }
        }
      }
    }
  }
`;

export { PLANETS_QUERY };
