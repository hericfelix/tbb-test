import { styled } from 'styled-components';

export const MainContainer = styled.main`
  padding: 1rem 1.5rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-inline: 2.5rem;
  }
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const ProductsListContent = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(12, 1fr);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(16, 1fr);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    grid-template-columns: repeat(20, 1fr);
  }
`;

export const PageTitle = styled.h1`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral.neutral6};
  font-size: ${({ theme }) => theme.fontSizes.md};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  padding: 1rem;

  .results_total {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.neutral.neutral5};
    text-align: center;
  }
`;

export const HomeProductsContentContainer = styled.div`
  display: flex;
  gap: 1rem;

  width: 100%;
`;
