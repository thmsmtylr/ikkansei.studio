import { gql } from "graphql-request";

export const LAYOUT_QUERY = gql`
  query Layout {
    _site {
      globalSeo {
        fallbackSeo {
          title
          description
          image {
            url
          }
        }
      }
      favicon {
        url
      }
    }
    layout {
      id
      backgroundColor {
        hex
      }
    }
    mainMenu {
      navigationItems {
        id
        path
        title
        external
      }
    }
  }
`;
