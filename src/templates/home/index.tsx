import React from 'react';

import { ProductCard } from '@components/product-card';

import { useProducts } from 'src/contexts';

export function HomeTemplate() {
  const { allProductsQuery } = useProducts();

  const productsNodes = allProductsQuery.data?.allProductsJson.edges;

  console.log(productsNodes);

  return (
    <div>
      Olá!
      <ul>{productsNodes?.map((node) => <ProductCard product={node.node} />)}</ul>
    </div>
  );
}
