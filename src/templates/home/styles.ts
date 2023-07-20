import { styled } from 'styled-components';

export const ProductsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  padding: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
  }
`;
