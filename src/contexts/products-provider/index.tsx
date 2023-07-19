import React, { createContext, useState, useContext } from 'react';

import { useGetAllProducts } from 'src/services/hooks';

import { ProductsProviderProps } from './types';
import { ProviderProps } from 'src/types';
import { generateRegex } from 'src/utils';

const ProductsProviderContext = createContext<ProductsProviderProps>({} as any);

export function ProductsProvider({ children }: ProviderProps) {
  const [productNameSearchValue, setProductNameSearchValue] = useState('');
  const [page, setPage] = useState(0);
  const [productCategories, setProductCategories] = useState<string[]>([]);

  const [allProductsQuery] = useGetAllProducts({
    name: generateRegex(productNameSearchValue),
    category: generateRegex(productCategories),
    page
  });

  return (
    <ProductsProviderContext.Provider
      value={{
        allProductsQuery,
        page,
        productCategories,
        productNameSearchValue,
        setPage,
        setProductCategories,
        setProductNameSearchValue
      }}
    >
      {children}
    </ProductsProviderContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsProviderContext);
}
