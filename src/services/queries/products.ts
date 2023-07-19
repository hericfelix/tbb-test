export const productsQuery = `
  query ProductsQuery($page: Int = 0, $name: String = "", $category: String = "") {
    allProductsJson(
      skip: $page
      filter: { name: { regex: $name }, category: { name: { regex: $category } } }
      limit: 10
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
