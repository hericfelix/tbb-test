import React, { createContext, useState, useContext } from 'react';

import { useGetAllProducts } from 'src/services/hooks';
import { useDebounce } from 'src/hooks';

import { ProductsProviderProps } from './types';
import { ProviderProps } from 'src/types';

import { generateRegex } from 'src/utils';

const ProductsProviderContext = createContext<ProductsProviderProps>({} as any);

export function ProductsProvider({ children }: ProviderProps) {
  const [productNameSearchValue, setProductNameSearchValue] = useState('');
  const [selectedProductCategories, setSelectedProductCategories] = useState<string[]>([]);

  const debouncedProductNameSearchValue = useDebounce(productNameSearchValue, 200);

  const [allProductsQuery] = useGetAllProducts({
    name: generateRegex(debouncedProductNameSearchValue),
    category: generateRegex(selectedProductCategories)
  });
  return (
    <ProductsProviderContext.Provider
      value={{
        allProductsQuery,
        selectedProductCategories,
        productNameSearchValue,
        setSelectedProductCategories,
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
