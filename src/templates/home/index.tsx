import React from 'react';

import { ProductCard } from '@components/product-card';

import { useProducts } from 'src/contexts';

import { ProductsList } from './styles';

export function HomeTemplate() {
  const { allProductsQuery } = useProducts();

  const productsNodes = allProductsQuery.data?.allProductsJson.edges;

  console.log(productsNodes);

  return (
    <div>
      Olá!
      <ProductsList>
        {productsNodes?.map((node) => <ProductCard product={node.node} />)}
      </ProductsList>
    </div>
  );
}
