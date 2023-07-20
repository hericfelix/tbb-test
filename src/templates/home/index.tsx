import React from 'react';

import { ProductCard } from '@components/product-card';

import { useProducts } from 'src/contexts';

import {
  ProductsList,
  PageTitle,
  TitleContainer,
  HomeProductsContentContainer,
  MainContainer,
  ProductsListContent
} from './styles';
import { MobileFilter } from './components/filter/mobile-filter';
import { Skeleton } from '@chakra-ui/react';
import { useDeviceType } from 'src/hooks';
import { DesktopFilter } from './components/filter/desktop-filter';
import { Pagination } from '@components/pagination';

export function HomeTemplate() {
  const { allProductsQuery, setPage } = useProducts();

  const deviceType = useDeviceType();

  const productsNodes = allProductsQuery.data?.allProductsJson.edges;
  const pageInfo = allProductsQuery.data?.allProductsJson.pageInfo;

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
          <ProductsListContent>
            {allProductsQuery.fetching &&
              Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} width="auto" height="26.25rem" />
              ))}
            {productsNodes?.map((node) => <ProductCard product={node.node} />)}
          </ProductsListContent>

          <Pagination
            hasNextPage={pageInfo?.hasNextPage}
            hasPreviousPage={pageInfo?.hasPreviousPage}
            page={pageInfo?.currentPage}
            pageCount={pageInfo?.pageCount}
            handleChangePage={(number) => {
              console.log('foi');
              setPage(number - 1);
            }}
          />
        </ProductsList>
      </HomeProductsContentContainer>
    </MainContainer>
  );
}
