import { useQuery } from 'urql';

import { AllProductsJsonData, QueryAllProductsVariables } from './types';

import { productsQuery } from 'src/services/queries/products';

export function useGetAllProducts(variables: QueryAllProductsVariables) {
  return useQuery<AllProductsJsonData, QueryAllProductsVariables>({
    query: productsQuery,
    variables
  });
}
