import { gql } from "graphql-request";

export const PAGE_BY_SLUG_QUERY = gql`
  query Page($slug: String) {
    page(
      filter: {
        _isValid: { eq: "true" }
        _status: { eq: published }
        slug: { eq: $slug }
      }
    ) {
      id
      slug
      title
      subpage {
        id
        slug
        title
      }
    }
  }
`;
