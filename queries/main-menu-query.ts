import { gql } from "graphql-request";

export const NAVIGATION_QUERY = gql`
  query Navigation {
    mainMenu {
      navigationItems {
        id
        path
        title
      }
    }
  }
`;
