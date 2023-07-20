export const productsQuery = `
  query ProductsQuery( $name: String = "", $category: String = "") {
    allProductsJson(
      filter: { name: { regex: $name }, category: { name: { regex: $category } } }
    ) {
      edges {
        node {
          id
          jsonId
          name
          shortDescription
          images {
            asset {
              url
            }
          }
          category {
            _id
            name
          }
        }
      }
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        pageCount
      }
      totalCount
    }
  }
`;
