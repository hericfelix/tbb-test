import { Dispatch, SetStateAction } from 'react';
import { UseQueryState } from 'urql';

import {
  AllProductsJsonData,
  QueryAllProductsVariables
} from 'src/services/hooks/useQueryAllProducts/types';

export interface ProductsProviderProps {
  allProductsQuery: UseQueryState<AllProductsJsonData, QueryAllProductsVariables>;
  productNameSearchValue: string;
  setProductNameSearchValue: Dispatch<SetStateAction<string>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  selectedProductCategories: string[];
  setSelectedProductCategories: Dispatch<SetStateAction<string[]>>;
}
