import React from 'react';

import { ProductCard } from '@components/product-card';

import { useProducts } from 'src/contexts';

import {
  ProductsList,
  PageTitle,
  TitleContainer,
  HomeProductsContentContainer,
  MainContainer
} from './styles';
import { MobileFilter } from './components/filter/mobile-filter';
import { Skeleton } from '@chakra-ui/react';
import { useDeviceType } from 'src/hooks';
import { DesktopFilter } from './components/filter/desktop-filter';

export function HomeTemplate() {
  const { allProductsQuery } = useProducts();

  const deviceType = useDeviceType();

  const productsNodes = allProductsQuery.data?.allProductsJson.edges;

  function handleResultsText() {
    const productsCount = allProductsQuery.data?.allProductsJson.totalCount;

    if (productsCount === 0) {
      return 'Nenhum produto encontrado';
    }
    if (productsCount === 1) {
      return `1 produto encontrado`;
    }

    return `${productsCount} produtos encontrados`;
  }

  return (
    <MainContainer>
      <TitleContainer>
        <PageTitle>Productos de higiene personal</PageTitle>

        {deviceType !== 'desktop' && <MobileFilter />}
        <Skeleton isLoaded={!allProductsQuery.fetching}>
          <p className="results_total">{handleResultsText()}</p>
        </Skeleton>
      </TitleContainer>
      <HomeProductsContentContainer>
        {deviceType === 'desktop' && <DesktopFilter />}
        <ProductsList>
          {allProductsQuery.fetching &&
            Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} width="auto" height="26.25rem" />
            ))}
          {productsNodes?.map((node) => <ProductCard product={node.node} />)}
        </ProductsList>
      </HomeProductsContentContainer>
    </MainContainer>
  );
}
