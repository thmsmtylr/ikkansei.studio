import { gql } from "graphql-request";

export const SUBPAGE_BY_SLUG_QUERY = gql`
  query Subpage($slug: String) {
    subpage(
      filter: {
        _isValid: { eq: "true" }
        _status: { eq: published }
        slug: { eq: $slug }
      }
    ) {
      id
      slug
      title
    }
  }
`;
