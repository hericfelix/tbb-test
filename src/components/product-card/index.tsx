import React from 'react';

import { ProductCardProps } from './types';

import { ImageContainer, ProductCardContainer, ProductInfoContainer } from './styles';

export function ProductCard({ product }: ProductCardProps) {
  return (
    <ProductCardContainer>
      <ImageContainer>
        <img src={product.images[0].asset.url} />
      </ImageContainer>
      <ProductInfoContainer>
        <div>
          <h2>{product.name}</h2>
          <h3>{product.category.name}</h3>
        </div>
        <p>{product.shortDescription}</p>
      </ProductInfoContainer>
    </ProductCardContainer>
  );
}
